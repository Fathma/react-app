import React, { Component } from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart'
class CustomerCharts extends Component {
    render() {

        var customer_holder = {};
        this.props.data.forEach(function (d) {
            if (customer_holder.hasOwnProperty(d.customer_work_area)) {
                customer_holder[d.customer_work_area] = customer_holder[d.customer_work_area] + 1;
            } else {
                customer_holder[d.customer_work_area] = 1;
            }
        });

        var customer = [];

        for (var prop in customer_holder) {
            customer.push({ label: prop, y: customer_holder[prop] });
        }

        var bar_holder = {};
        this.props.data.forEach(function (d) {
            if (bar_holder.hasOwnProperty(d.date)) {
                bar_holder[d.date] = bar_holder[d.date] + 1;
            } else {
                bar_holder[d.date] = 1;
            }
        });

        var bar_customer = [];

        for (var prop in bar_holder) {
            bar_customer.push({ label: prop, y: bar_holder[prop] });
        }

        return (
            <div>
                <BarChart data={bar_customer} title='District wise customer' yTitle='District Count' xTitle='Dates' />
                <PieChart data={customer} title='Area Wise Customer' />
            </div>
        );
    }

}
export default CustomerCharts;                             