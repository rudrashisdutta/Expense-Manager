import React, { useState } from "react";
import ExpenseForm from "./expense_form/ExpenseForm";

function NewExpenseContainer({ className, saveExpense }) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const toggle = (e) => {
    setShowExpenseForm((previousState) => {
      return !previousState;
    });
  };
  return (
    <>
      {!showExpenseForm && (
        <button className={className.toggle} onClick={toggle}>
          {"Add New Expense!"}
        </button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          className={className.new_expense_form}
          toggle={toggle}
          onSaveExpense={saveExpense}
        />
      )}
    </>
  );
}

export default NewExpenseContainer;
