// @flow
import * as React from 'react';
import {ExpenseForm} from "./ExpenseForm";
import {ExpenseTable} from "./ExpenseTable";
import {FieldValues} from "react-hook-form";

export interface Expense {
    description: string;
    amount: number;
    category?: string;
}

export const ExpenseApp = () => {
    const onSubmit = (data: Expense) => console.log(data);

    return (
        <div>
            Expense App
            <ExpenseForm onSubmit={onSubmit}/>
            <ExpenseTable />
        </div>
    );
};