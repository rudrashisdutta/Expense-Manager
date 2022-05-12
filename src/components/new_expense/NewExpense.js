import classes from "./NewExpense.module.css";
import React from "react";
import ExpenseForm from "./expense_form/ExpenseForm";

export default function NewExpense(props) {
  return (
    <div className={classes.new_expense}>
      <ExpenseForm />
    </div>
  );
}
