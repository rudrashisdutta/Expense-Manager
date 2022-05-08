import "./App.css";
import classes from "./App.module.css";
import Expenses from "./components/expenses/Expenses";

function App() {
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
      <h2>Expense Manager</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
