// @flow
import * as React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters'}),
    age: z.number({ invalid_type_error: 'Age field is required' }).min(18)
});


type FormData = z.infer<typeof schema>;


export const Form = (props: Props) => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlName" className="form-label">Name</label>
                    <input {...register('name')}
                           type="text" className="form-control"
                           id="exampleFormControlName" placeholder="<NAME>"/>
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="numberControlInput1" className="form-label">Age</label>
                    <input {...register('age', {valueAsNumber: true})} type="number" className="form-control" id="numberControlInput1"
                           placeholder="123"/>
                    {errors.age && <p className="text-danger">{errors.age.message}</p>}
                </div>
                <button type="submit" disabled={!isValid} className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};