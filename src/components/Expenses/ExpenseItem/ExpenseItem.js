import classes from "./ExpenseItem.module.css";
import React from "react";

export default function ExpenseItem(props) {
  let date = "August 25th";
  let title = "Birthday Gift";
  let amount = 300;
  return (
    <div className={classes.expense_item}>
      <div>{date}</div>
      <div className={classes.expense_item__description}>
        <h2>{title}</h2>
        <div className={classes.expense_item__price}>${amount}</div>
      </div>
    </div>
  );
}
