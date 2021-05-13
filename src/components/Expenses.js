import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses";
const Expenses = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    );
  });

  return <div className="expenses">{renderedItems}</div>;
};

export default Expenses;
