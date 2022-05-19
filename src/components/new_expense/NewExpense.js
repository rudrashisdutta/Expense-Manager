import classes from "./NewExpense.module.css";
import React, { useState } from "react";
import ExpenseForm from "./expense_form/ExpenseForm";

export default function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const text = ["NEW", "CLOSE"];
  const toggle = (e) => {
    setShowExpenseForm((previousState) => {
      return !previousState;
    });
  };
  return (
    <div className={classes.new_expense}>
      <button className={classes.toggle} onClick={toggle}>
        {showExpenseForm ? text[1] : text[0]}
      </button>
      {showExpenseForm && (
        <ExpenseForm
          className={classes.new_expense_form}
          setShow={setShowExpenseForm}
        />
      )}
    </div>
  );
}
