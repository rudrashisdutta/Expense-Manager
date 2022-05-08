import classes from "./Expenses.module.css";
import ExpenseItem from "./expense_item/ExpenseItem";
import React from "react";
import Card from "../card/Card";

export default function Expenses({ expenses }) {
  return (
    <Card className={classes.expenses}>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
}
