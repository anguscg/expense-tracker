import React from 'react';
import ChartBar from "./ChartBar.js";
import './Chart.css'

function Chart(props) {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...valueArray)

    return (
        <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={500} label={dataPoint.label} />)}
        </div>
    )
}

export default Chart;