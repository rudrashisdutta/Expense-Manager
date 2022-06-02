import { useState } from "react";
import "./App.css";
import classes from "./App.module.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new_expense/NewExpense";

const INITIAL_DATA = [
  {
    key: "e1",
    title: "Gift",
    date: new Date("2022-08-25"),
    amount: 300.0,
  },
  {
    key: "e2",
    title: "Mobile Phone",
    date: new Date("2019-04-30"),
    amount: 400.0,
  },
  {
    key: "e3",
    title: "Laptop",
    date: new Date("2019-08-28"),
    amount: 1350.6,
  },
  {
    key: "e4",
    title: "Gift",
    date: new Date("2021-08-25"),
    amount: 200.0,
  },
  {
    key: "e5",
    title: "Mobile Phone",
    date: new Date("2021-04-30"),
    amount: 500.0,
  },
  {
    key: "e6",
    title: "ROG",
    date: new Date("2022-08-28"),
    amount: 1450.62,
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_DATA);
  const addExpense = (expense) => {
    console.log(expense);
    setExpenses((previousState) => {
      return [expense, ...previousState];
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
