import classes from "./ExpenseForm.module.css";
import React, { useState } from "react";

export default function ExpenseForm({ toggle, className, onSaveExpense }) {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  const onTitleChange = (e) => {
    setInput((previousState) => {
      return {
        ...previousState,
        title: e.target.value,
      };
    });
  };
  const onAmountChange = (e) => {
    setInput((previousState) => {
      return {
        ...previousState,
        amount: Number(e.target.value),
      };
    });
  };
  const onDateChange = (e) => {
    setInput((previousState) => {
      return {
        ...previousState,
        date: new Date(e.target.value),
      };
    });
  };

  const onNewExpenseSubmitted = (e) => {
    e.preventDefault();
    onSaveExpense(input);
    setInput({
      title: "",
      amount: "",
      date: "",
    });
    toggle(false);
  };

  return (
    <form className={className} onSubmit={onNewExpenseSubmitted}>
      <div className={classes.new_expense__controls}>
        <div className={classes.new_expense__control}>
          <label>Title</label>
          <input
            type={"text"}
            onChange={onTitleChange}
            value={input.title}
            required
          />
        </div>
        <div className={classes.new_expense__control}>
          <label>Amount</label>
          <input
            type={"number"}
            min={"0.01"}
            step={"0.01"}
            onChange={onAmountChange}
            value={input.amount}
            required
          />
        </div>
        <div className={classes.new_expense__control}>
          <label>Date</label>
          <input
            type={"date"}
            min={"2019-01-01"}
            max={"2022-12-31"}
            onChange={onDateChange}
            value={(input.date !== "" && convert(input.date)) || ""}
            required
          />
        </div>
      </div>
      <div className={classes.new_expense__actions}>
        <button type={"button"} onClick={(e) => toggle(false)}>
          Cancel
        </button>
        <button type={"submit"}>Add Expense</button>
      </div>
    </form>
  );
}
