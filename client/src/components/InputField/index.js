import React from 'react';
import './InputField.scss';

export default function InputField(props) {
    const { register, name, label, errors, icon, ...rest } = props;

    return (
        <div className="input-field">
            {icon && <i className={icon}></i>}
            {label && <label htmlFor="">{label}<span> *</span></label>}
            <input {...register(name)} {...rest} />
            {errors?.message && <p className="invalid-feedback">{errors?.message}</p>}
        </div>
    )
}