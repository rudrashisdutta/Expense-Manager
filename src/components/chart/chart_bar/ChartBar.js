import React from "react";
import classes from "./ChartBar.module.css";

function ChartBar({ value, maxValue, label }) {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className={classes.chart_bar___container}>
      <div className={classes.chart_bar__label}>{label}</div>
      <div className={classes.chart_bar}>
        <div className={classes.chart_bar__inner}>
          <div
            className={classes.chart_bar__fill}
            style={{ height: barFillHeight }}
          ></div>
        </div>
      </div>
      <div className={classes.chart_bar__label}>{"$" + value}</div>
    </div>
  );
}

export default ChartBar;
