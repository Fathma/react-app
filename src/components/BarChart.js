import React, { Component } from 'react';
import CanvasJSReact from './canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: this.props.title
            },
            axisX: {
                title: this.props.xTitle,
                reversed: true,

            },
            axisY: {
                title: this.props.yTitle,
                labelFormatter: this.addSymbols

            },
            data: [{
                type: "bar",
                dataPoints: this.props.data
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
}

export default BarChart;
