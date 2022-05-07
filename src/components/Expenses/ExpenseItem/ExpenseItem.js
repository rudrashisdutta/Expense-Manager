import classes from "./ExpenseItem.module.css";
import React from "react";

export default function ExpenseItem({ date, title, amount }) {
  return (
    <div className={classes.expense_item}>
      <div>
        <div>{date.toLocaleString("en-US", { month: "long" })}</div>
        <div>{date.getFullYear()}</div>
        <div>{date.getDate()}</div>
      </div>
      <div className={classes.expense_item__description}>
        <h2>{title}</h2>
        <div className={classes.expense_item__price}>${amount}</div>
      </div>
    </div>
  );
}
