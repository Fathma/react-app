import React, { Component } from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart'
class CustomerCharts extends Component {

    render() {
        // manipulating data for pie chart
        var customer_holder = {};
        this.props.data.forEach(function (d) {
            if (customer_holder.hasOwnProperty(d.customer_work_area)) {
                customer_holder[d.customer_work_area] = customer_holder[d.customer_work_area] + 1;
            } else {
                customer_holder[d.customer_work_area] = 1;
            }
        });

        var cus_labels_pie = []
        var cus_data_pie = []
        for (var work_area in customer_holder) {
            cus_labels_pie.push(work_area)
            cus_data_pie.push(customer_holder[work_area])
        }

        // manipulating data for bar chart
        var bar_holder = {};
        this.props.data.forEach(function (d) {

            if (bar_holder.hasOwnProperty(d.date)) {
                if (new Date(d.date).getMonth() === new Date().getMonth()) {
                    bar_holder[d.date] = bar_holder[d.date] + 1;
                }
            } else {
                bar_holder[d.date] = 1;
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
                <BarChart labels={bar_date} data={bar_customer_number} title='District Wise Customer Counts' label='Districts' />
                <PieChart labels={cus_labels_pie} data={cus_data_pie} title='Area Wise Customer' />
            </div>
        );
    }

}
export default CustomerCharts;                             