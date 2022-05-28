import React from "react";

import classes from "./ExpensesFilter.module.css";

const ExpensesFilter = ({ onAddExpensesFilter, selected }) => {
  const onSelectedExpenseFilterChange = (e) => {
    onAddExpensesFilter(Number(e.target.value));
  };
  return (
    <div className={classes.expenses_filter}>
      <div className={classes.expenses_filter__control}>
        <label>Filter by year</label>
        <select value={selected} onChange={onSelectedExpenseFilterChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
