import classes from "./ExpenseItem.module.css";
import React from "react";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../../card/Card";

export default function ExpenseItem({ date, title, amount }) {
  return (
    <Card className={classes.expense_item}>
      <ExpenseItemDate date={date} />
      <div className={classes.expense_item__description}>
        <h2>{title}</h2>
        <div className={classes.expense_item__price}>${amount}</div>
      </div>
    </Card>
  );
}
