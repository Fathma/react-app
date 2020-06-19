import React, { Component } from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart'

class SalesCharts extends Component {
    render() {
        var sales_holder = {};

        this.props.data.forEach(function (d) {
            if (sales_holder.hasOwnProperty(d.product)) {
                sales_holder[d.product] = sales_holder[d.product] + d.order_quantity;
            } else {
                sales_holder[d.product] = d.order_quantity;
            }
        });

        var sales = [];

        for (var prop in sales_holder) {
            sales.push({ label: prop, y: sales_holder[prop] });
        }


        var bar_holder = {};

        this.props.data.forEach(function (d) {
            if (bar_holder.hasOwnProperty(d.date)) {
                bar_holder[d.date] = bar_holder[d.date] + d.order_quantity;
            } else {
                bar_holder[d.date] = d.order_quantity;
            }
        });

        var bar_sales = [];

        for (var prop in bar_holder) {

            bar_sales.push({ label: prop, y: bar_holder[prop] });
        }
        return (
            <div>
                <BarChart data={bar_sales} title='Product Wise Sales' yTitle='Quantity of Product' xTitle='Dates' />

                <PieChart data={sales} title='Product Wise Sales' />

            </div>
        );
    }
}

export default SalesCharts;
