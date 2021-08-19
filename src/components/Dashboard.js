import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';

const DashboardPage = () => (
    <div>
        Expense Dashboard page content here!
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default DashboardPage;