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

    return (
        <div>
            Expense App
            <ExpenseForm onSubmit={addExpense}/>
            <ExpenseTable expenses={expenses} onDelete={deleteExpense}/>
        </div>
    );
};