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

        for (var prop in sales_holder) {
            sales_label_pie.push(prop)
            sales_data_pie.push(sales_holder[prop])
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

        var bar_sales = [];
        var bar_date = []
        var bar_customer_number = []
        for (var prop in bar_holder) {
            if (new Date(prop).getMonth() === new Date().getMonth()) {
                bar_date.push(prop)
                bar_customer_number.push(bar_holder[prop])
                bar_sales.push({ label: prop, y: bar_holder[prop] });
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
