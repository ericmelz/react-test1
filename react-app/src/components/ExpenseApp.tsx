// @flow
import * as React from 'react';
import {ExpenseForm} from "./ExpenseForm";
import {ExpenseTable} from "./ExpenseTable";

export interface Expense {
    id: string;
    description: string;
    amount: number;
    category?: string;
}

export const ExpenseApp = () => {
    const [expenses, setExpenses] = React.useState<Expense[]>([]);

    const addExpense = (expense: Expense) => {
        console.log(expense);
        setExpenses([...expenses, expense]);
    }

    const deleteExpense = (id: string) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    }

    const total = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div>
            Expense App
            <ExpenseForm onSubmit={addExpense}/>
            <ExpenseTable expenses={expenses} total={total} onDelete={deleteExpense}/>
        </div>
    );
};