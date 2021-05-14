import React from 'react';
import * as yup from "yup";
import Form from 'components/Form';
import InputField from 'components/InputField';
import BtnSubmit from 'components/BtnSubmit';

const validationSchema = yup.object().shape({
    userName: yup.string()
        .required('Username is required'),
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(5, 'Password must be at least 5 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Confirm Password must match')
        .required('Confirm Password is required'),
});

export default function FormRegister(props) {
    const { className, title, onSubmit } = props;
    return (
        <>
            <Form
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                className={className}
            >
                <h2 className="title">{title}</h2>
                <InputField
                    name="userName"
                    type="text"
                    icon="fas fa-user"
                    placeholder="Username"

                />
                <InputField
                    name="email"
                    type="text"
                    icon="fas fa-envelope"
                    placeholder="Email"

                />
                <InputField
                    name="password"
                    type="password"
                    icon="fas fa-lock"
                    placeholder="Password"
                />
                <InputField
                    name="confirmPassword"
                    type="password"
                    icon="fas fa-lock"
                    placeholder="Password"
                />

                <BtnSubmit name="Signup" />
            </Form>
        </>
    )
}
