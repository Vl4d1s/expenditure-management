import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  const renderedExpense = filteredExpenses.map((expense) => {
    return (
      <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    );
  });

  let expensesContent =
    filteredExpenses.length > 0 ? (
      renderedExpense
    ) : (
      <h2 className="expenses-list__fallback">Found no expenses.</h2>
    );

  return expensesContent;
};

export default ExpensesList;
