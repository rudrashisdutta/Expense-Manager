import classes from "./ExpenseForm.module.css";
import React, { useState } from "react";

export default function ExpenseForm({ setShow, className }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };
  const onDateChange = (e) => {
    setDate(new Date(e.target.value));
  };

  return (
    <form className={className}>
      <div className={classes.new_expense__controls}>
        <div className={classes.new_expense__control}>
          <label>Title</label>
          <input type={"text"} onChange={onTitleChange} />
        </div>
        <div className={classes.new_expense__control}>
          <label>Amount</label>
          <input
            type={"number"}
            min={"0.01"}
            step={"0.01"}
            onChange={onAmountChange}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label>Date</label>
          <input
            type={"date"}
            min={"2019-01-01"}
            max={"2022-12-31"}
            onChange={onDateChange}
          />
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
