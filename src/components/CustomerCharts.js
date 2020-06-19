
import React, { Component } from 'react';
import axios from 'axios';
import PieChart from './PieChart'
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

        return (
            <div>
                <PieChart data={customer} title='Area Wise Customer' />

            </div>
        );
    }

}
export default CustomerCharts;                             