import React from "react";
import classes from "./Chart.module.css";
import ChartBar from "./chart_bar/ChartBar";

function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValues);
  return (
    <div className={classes.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
