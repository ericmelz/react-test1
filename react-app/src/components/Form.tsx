// @flow
import * as React from 'react';
import {FieldValues, useForm} from 'react-hook-form';

type Props = {};
export const Form = (props: Props) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlName" className="form-label">Name</label>
                    <input {...register('name')}
                           type="text" className="form-control"
                           id="exampleFormControlName" placeholder="<NAME>"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="numberControlInput1" className="form-label">Age</label>
                    <input {...register('age')} type="number" className="form-control" id="numberControlInput1"
                           placeholder="123"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};