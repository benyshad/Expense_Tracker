import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  const [formVisibilityStat, setformVisibilityStat] = useState("hidden");

  const showExpenseFormHandler = () => {
    setformVisibilityStat("visible");
  };

  const closeFormHandler = () => {
    setformVisibilityStat("hidden");
  };

  if (formVisibilityStat === "visible") {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={closeFormHandler}
        ></ExpenseForm>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={showExpenseFormHandler}>Add Expense</button>
      </div>
    );
  }
};

export default NewExpense;
