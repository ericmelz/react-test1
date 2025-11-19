// @flow
import * as React from 'react';
import {Expense} from "./ExpenseApp";

type Props = {
    expenses: Expense[];
    total: number;
    onDelete: (id: string) => void;
};
export const ExpenseTable = ({expenses, total, onDelete}: Props) => {
    return (
        <>
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
                {expenses.map(expense =>
                    <tr key={expense.id}>
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
                            <button onClick={() => onDelete(expense.id)}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <div>Total: {total}</div>
        </>
    );
};