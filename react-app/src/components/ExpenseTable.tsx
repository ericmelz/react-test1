// @flow
import * as React from 'react';
import {Expense} from "./ExpenseApp";

type Props = {
    expenses: Expense[];
};
export const ExpenseTable = (props: Props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {props.expenses.map((expense, i) =>
                <tr key={i}>
                    <td>
                        {expense.description}
                    </td>
                    <td>
                        {expense.amount}
                    </td>
                    <td>
                        {expense.category}
                    </td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    );
};