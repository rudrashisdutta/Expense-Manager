import React from "react";
import classes from "./ExpenseItemDate.module.css";

export default function ExpenseItemDate({ date }) {
    const month = date.toLocaleString("en-US", { month: "long" })
    const year = date.getFullYear()
    const day = date.getDate()
  return (
    <div className={classes.expense_date}>
      <div className={classes.expense_date__month}>{month}</div>
      <div className={classes.expense_date__year}>{year}</div>
      <div className={classes.expense_date__day}>{day}</div>
    </div>
  );
}
