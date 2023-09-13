import { useState } from "react";
import Card from "../UI/Card";
import FilteredExpensesList from "./FilteredExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const saveYearHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.item.filter((expenses) => {
    return expenses.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <div>
        <Card>
          <ExpensesFilter
            getDefaultYear={year}
            onGetYear={saveYearHandler}
          ></ExpensesFilter>
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
          <FilteredExpensesList item={filteredExpenses}></FilteredExpensesList>

          {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            ></ExpenseItem>
          ))} */}
          {/* <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        ></ExpenseItem> */}
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
