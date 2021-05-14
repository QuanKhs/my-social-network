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
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});

export default function FormLogin(props) {
    const { className } = props;
    const onSubmitForm = (data) => {
        console.log('🚀 ~ file: index.js ~ line 19 ~ FormSignin ~ data', data);
    };
    return (
        <>
            <Form onSubmit={onSubmitForm} validationSchema={validationSchema} className={className}>
                <InputField
                    name="email" type="text"
                    icon="fas fa-user"
                    placeholder="Email"

                />
                <InputField
                    name="password"
                    type="password"
                    icon="fas fa-lock"
                    placeholder="Password"
                />

                <BtnSubmit />
            </Form>
        </>
    );
}