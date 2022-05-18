import classes from "./ExpenseForm.module.css";
import React from "react";

export default function ExpenseForm({ setShow }) {
  return (
    <form>
      <div className={classes.new_expense__controls}>
        <div className={classes.new_expense__control}>
          <label>Title</label>
          <input type={"text"} />
        </div>
        <div className={classes.new_expense__control}>
          <label>Amount</label>
          <input type={"number"} min={"0.01"} step={"0.01"} />
        </div>
        <div className={classes.new_expense__control}>
          <label>Date</label>
          <input type={"date"} min={"2019-01-01"} max={"2022-12-31"} />
        </div>
      </div>
      <div className={classes.new_expense__actions}>
        <button type={"submit"} onClick={(e) => setShow(false)}>
          Add Expense
        </button>
      </div>
    </form>
  );
}
