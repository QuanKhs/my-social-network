import React, { useState } from 'react';
import './InputField.scss';

export default function InputField(props) {
    const { register, name, label, errors, icon, ...rest } = props;

    const [showPassword, setShowPassword] = useState(false);

    const handleHidePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <div className="input-field">
                {icon && <i className={icon}></i>}
                {label && <label htmlFor="">{label}<span> *</span></label>}
                <input {...register(name)} {...rest} type={showPassword ? 'text' : rest.type} />
                {(name === 'password' || name === 'confirmPassword') &&
                    <i
                        className={showPassword ? "fa fa-eye show" : "fa fa-eye-slash show"}
                        onClick={handleHidePassword}>
                    </i>
                }
            </div>
            {errors?.message && <p className="invalid">{errors?.message}</p>}
        </>

    )
}