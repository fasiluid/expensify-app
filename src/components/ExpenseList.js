import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.expenses.length === 0 ? 
            (
                <p>No Expenses</p>
            ) 
            : 
            (props.expenses.map((expense, index) => (
                <ExpenseListItem 
                    key={expense.id}
                    index={index+1}
                    {...expense} 
                />
            ))) 
            
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

