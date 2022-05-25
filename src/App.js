import { useState } from "react";
import "./App.css";
import classes from "./App.module.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new_expense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Gift",
      date: new Date("2020-08-25"),
      amount: 300.0,
    },
    {
      title: "Mobile Phone",
      date: new Date("2020-04-30"),
      amount: 400.0,
    },
    {
      title: "Laptop",
      date: new Date("2020-08-28"),
      amount: 1350.6,
    },
    {
      title: "Gift",
      date: new Date("2020-08-25"),
      amount: 300.0,
    },
    {
      title: "Mobile Phone",
      date: new Date("2020-04-30"),
      amount: 400.0,
    },
    {
      title: "Laptop",
      date: new Date("2020-08-28"),
      amount: 1350.6,
    },
  ]);
  const addExpense = (expense) => {
    console.log(expense);
    setExpenses((previousState) => {
      return [...previousState, expense];
    });
  };
  return (
    <div>
      <div className={classes.heading}>
        <h2>
          <a href="/">Expense Manager</a>
        </h2>
      </div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
