import classes from "./Expenses.module.css";
import ExpensesList from "./expenses_list/ExpensesList";
import React, { useState } from "react";
import Card from "../card/Card";
import ExpensesFilter from "./expenses_filter/ExpensesFilter";
import ExpensesChart from "./expense_chart/ExpensesChart";

export default function Expenses({ expenses }) {
  const [filter, setFilter] = useState(2019);
  const addExpensesFilter = (filter) => {
    console.log(filter);
    setFilter(filter);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === filter;
  });
  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        selected={filter}
        onAddExpensesFilter={addExpensesFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
