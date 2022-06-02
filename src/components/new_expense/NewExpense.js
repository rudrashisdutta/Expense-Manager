import classes from "./NewExpense.module.css";
import NewExpenseContainer from "./NewExpenseContainer";

export default function NewExpense({ onAddExpense }) {
  const saveExpense = (input) => {
    const newExpense = {
      ...input,
      id: (Math.random() * Math.random()).toString(),
    };
    onAddExpense(newExpense);
  };
  return (
    <div className={classes.new_expense}>
      <NewExpenseContainer className={classes} saveExpense={saveExpense} />
    </div>
  );
}
