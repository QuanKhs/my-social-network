import React from 'react';
import './InputField.scss';

export default function InputField(props) {
    const { register, name, label, errors, icon, ...rest } = props;
    console.log('🚀 ~ file: index.js ~ line 6 ~ InputField ~ errors', errors);

    return (
        <>
            <div className="input-field">
                {icon && <i className={icon}></i>}
                {label && <label htmlFor="">{label}<span> *</span></label>}
                <input {...register(name)} {...rest} />
            </div>
            {errors?.message && <p className="invalid">{errors?.message}</p>}
        </>

    )
}