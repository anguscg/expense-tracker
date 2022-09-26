import React from 'react';
import './ChartBar.css';


function ChartBar(props) {
    // default bar fill
    let barFillHeight = "0%";
    // Filling the bar using value data and converting into css
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"
    }
    

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;