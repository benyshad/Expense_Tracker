import "./ExpensesFilter.css";
import Card from "../UI/Card";

const ExpensesFilter = (props) => {
  const GetSelectedYearHandler = (event) => {
    const selectedYear = event.target.value;
    console.log(selectedYear);
    props.onGetYear(selectedYear);
  };
  return (
    <Card>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.getDefaultYear} onChange={GetSelectedYearHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
