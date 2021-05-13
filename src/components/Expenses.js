import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    );
  });

  return <Card className="expenses">{renderedItems}</Card>;
};

export default Expenses;
