// @flow
import * as React from 'react';
import {ExpenseForm} from "./ExpenseForm";
import {ExpenseTable} from "./ExpenseTable";

export const ExpenseApp = () => {
    return (
        <div>
            Expense App
            <ExpenseForm />
            <ExpenseTable />
        </div>
    );
};