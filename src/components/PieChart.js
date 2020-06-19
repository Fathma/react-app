
import React, { Component } from 'react';
import CanvasJSReact from './canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart extends Component {
    render() {
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: this.props.title
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: this.props.data
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options} />
            </div>
        );
    }

}
export default PieChart;                             