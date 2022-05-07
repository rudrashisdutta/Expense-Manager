import classes from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import React from "react";

export default function Expenses(props) {
  const expenses = [
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
  ];
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </div>
  );
}
