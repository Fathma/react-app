import React, { Component } from 'react';

import { Pie } from 'react-chartjs-2'

class PieChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: this.props.labels,
            datasets: [{
                data: this.props.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }]
        }
    }
    render() {

        return (
            <div className='chart' >
                <h3 className="text-center">{this.props.title}</h3>
                <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                    height='75%'
                />


            </div>
        );
    }

}
export default PieChart;                             