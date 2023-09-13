import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.date);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
        <div className="new-expense__controls">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.onCloseForm}>
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
