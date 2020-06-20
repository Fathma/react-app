import React, { Component } from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart'

class SalesCharts extends Component {


    render() {
        // manipulating data for pie chart
        var sales_holder = {};

        this.props.data.forEach(function (d) {
            if (sales_holder.hasOwnProperty(d.product)) {
                sales_holder[d.product] = sales_holder[d.product] + d.order_quantity;
            } else {
                sales_holder[d.product] = d.order_quantity;
            }
        });

        var sales_label_pie = []
        var sales_data_pie = []

        for (var product in sales_holder) {
            sales_label_pie.push(product)
            sales_data_pie.push(sales_holder[product])
        }


        // manipulating data for bar chart

        var bar_holder = {};

        this.props.data.forEach(function (d) {
            if (bar_holder.hasOwnProperty(d.date)) {
                if (new Date(d.date).getMonth() === new Date().getMonth()) {

                    bar_holder[d.date] = bar_holder[d.date] + d.order_quantity;
                }
            } else {
                bar_holder[d.date] = d.order_quantity;
            }
        });

        var bar_date = []
        var bar_customer_number = []
        for (var date in bar_holder) {
            if (new Date(date).getMonth() === new Date().getMonth()) {
                bar_date.push(date)
                bar_customer_number.push(bar_holder[date])
            }
        }
        return (
            <div>
                <BarChart labels={bar_date} data={bar_customer_number} title='Product Wise Sales' label='Products' />
                <PieChart labels={sales_label_pie} data={sales_data_pie} title='Area Wise Sales' />
            </div>
        );
    }
}

export default SalesCharts;
