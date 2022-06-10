import React from "react";
import classes from "./Chart.module.css";
import ChartBar from "./chart_bar/ChartBar";

function Chart({ dataPoints }) {
  return (
    <div className={classes.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
