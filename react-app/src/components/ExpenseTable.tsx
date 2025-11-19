// @flow
import * as React from 'react';
import {Expense} from "./ExpenseApp";

type Props = {
    expenses: Expense[];
    total: number;
    onDelete: (id: string) => void;
};
export const ExpenseTable = ({expenses, total, onDelete}: Props) => {
    if (expenses.length === 0) {
        return null;
    }
    return (
        <>
            <table className="table table-bordered">
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
                            <button className="btn btn-outline-danger" onClick={() => onDelete(expense.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>)}
                </tbody>
                <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{total}</td>
                    <td></td>
                    <td></td>
                </tr>
                </tfoot>
            </table>

        </>
    );
};