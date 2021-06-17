import React from 'react';
import { ErrorMessage , useField } from 'formik';

export const TextField = ({ label, ...props }) => {
    const [field, meta ] = useField(props);
    
    return(
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input id="inputfundo" style={{backgroundColor: 'white'}}
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete='off'
            />
        </div>
    )
}