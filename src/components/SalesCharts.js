import React, { Component } from 'react';
import PieChart from './PieChart'

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

        return (
            <div>
                <PieChart data={sales} title='Product Wise Sales' />

            </div>
        );
    }
}

export default SalesCharts;
