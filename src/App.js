import Expenses from "./componets/Expenses/Expenses";
import NewExpense from "./componets/NewExpense/NewExpense";
import { useState } from "react";

const dummyExpenses = [
  {
    id: "e1",
    title: "Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpense] = useState(dummyExpenses);
  const addNewExpenseHandler = (expenses) => {
    setExpense((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
