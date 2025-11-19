// @flow
import * as React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Expense} from "./ExpenseApp";

const schema = z.object(
    {
        description: z.string().min(3, {message: 'Description must be at least 3 characters'}),
        amount: z.number({ invalid_type_error: 'Amount field is required' }).positive(),
        category: z.string()
    }
);

type FormData = z.infer<typeof schema>;

type Props = {
    onSubmit: (data: Expense) => void;
};
export const ExpenseForm = ({onSubmit}: Props) => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)})

    const handleFormSubmit = (data: FormData) => {
        const expense: Expense = {
            ...data,
            category: data.category === '' ? undefined : data.category
        };
        onSubmit(expense);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input {...register('description')}
                        type="text" className="form-control"
                        id="description" placeholder="Description"/>
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input {...register('amount', { valueAsNumber: true })}
                        type="number" step="0.01" className="form-control"
                        id="amount" placeholder="Amount"/>
                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select {...register('category')} id="category" className="form-control">
                        <option value="">Select a category</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                    {errors.category && <p className="text-danger">{errors.category.message}</p>}
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};