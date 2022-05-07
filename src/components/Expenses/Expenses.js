import classes from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import React from "react";

export default function Expenses({ expenses }) {
  return (
    <div className={classes.expenses}>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </div>
  );
}
