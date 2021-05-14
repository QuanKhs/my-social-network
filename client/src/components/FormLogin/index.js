import React from 'react';
import * as yup from "yup";
import Form from 'components/Form';
import InputField from 'components/InputField';
import BtnSubmit from 'components/BtnSubmit';

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(5, 'Password must be at least 5 characters')
        .required('Password is required'),
});

export default function FormLogin(props) {
    const { className, title, onSubmit } = props;

    return (
        <>
            <Form onSubmit={onSubmit} validationSchema={validationSchema} className={className}>
                <h2 className="title">{title}</h2>
                <InputField
                    name="email"
                    type="text"
                    icon="fas fa-user"
                    placeholder="Email"

                />
                <InputField
                    name="password"
                    type="password"
                    icon="fas fa-lock"
                    placeholder="Password"
                />

                <BtnSubmit name="Login" />
            </Form>
        </>
    );
}