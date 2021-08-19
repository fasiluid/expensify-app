import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import expenseTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount > 1 ? "expenses" : "expense";
  const formatedExpenseTotal = numeral(expenseTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formatedExpenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const filterdExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseTotal: expenseTotal(filterdExpenses),
    expenseCount: filterdExpenses.length,
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
