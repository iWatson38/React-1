import React from 'react';
import s from './FormsControls.module.css';
import { Field } from 'redux-form';

const FormControl = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl}>
            <div className={s.formControl + " " + (hasError ? s.error : "")}>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

export const Texterea = (props) => {
    const {input, meta, child, ...restProps} = props;    
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} component={component}
            validate={validators} {...props} /> {text}
    </div>
)