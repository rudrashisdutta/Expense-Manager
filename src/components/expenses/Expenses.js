import classes from "./Expenses.module.css";
import ExpenseItem from "./expense_item/ExpenseItem";
import React, { useState } from "react";
import Card from "../card/Card";
import ExpensesFilter from "./expenses_filter/ExpensesFilter";

export default function Expenses({ expenses }) {
  const [filter, setFilter] = useState(2022);
  const addExpensesFilter = (filter) => {
    console.log(filter);
    setFilter(filter);
  };
  return (
    <Card className={classes.expenses}>
      <ExpensesFilter onAddExpensesFilter={addExpensesFilter} />
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
