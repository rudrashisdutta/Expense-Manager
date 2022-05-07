import "./App.css";
import classes from "./App.module.css";
import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Gift",
      date: "August 25th",
      amount: 300.00
    },
    {
      title: "Mobile Phone",
      date: "April 30th",
      amount: 400
    },
    {
      title: "Laptop",
      date: "August 28th",
      amount: 1350
    }
  ]
  return (
    <div>
      {expenses.map(expense => {
        return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}/>
      })}
    </div>
  );
}

export default App;
