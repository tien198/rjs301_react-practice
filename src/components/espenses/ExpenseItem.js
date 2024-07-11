import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const name = new Date();

function ExpenseItem({ exp }) {
  return (
    <Card className="expense-item">
      {/* <div>{exp.date.toISOString()}</div> */}
      <ExpenseDate date={exp.date} />
      <div className="expense-item__description">
        <h2>{exp.title}</h2>
        <div className="expense-item__price">${exp.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;