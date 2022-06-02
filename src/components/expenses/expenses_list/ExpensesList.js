import React from "react";
import ExpenseItem from "./expense_item/ExpenseItem";
import classes from "./ExpensesList.module.css";

function ExpensesList({ filteredExpenses: items }) {
  if (items.length === 0) {
    return (
      <h2 className={classes.expenses_list__fallback}>Found no Expenses</h2>
    );
  }
  return (
    <ul className={classes.expenses_list}>
      {items.map((item) => {
        return (
          <ExpenseItem
            key={item.key}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
