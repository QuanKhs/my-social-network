import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthImages } from 'constants/images'
import './Login.scss';
import { Redirect } from 'react-router';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { login } from 'redux/actions/authAction';
import { useDispatch } from 'react-redux';
import FormLogin from 'components/FormLogin';
import ThirdParty from 'components/ThirdParty';

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),

});

export default function Login() {
    const [changePage, setChange] = useState(false);
    const [run, setRun] = useState(false);
    const authRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!changePage) return;
        setTimeout(() => {
            setRun(true);
        }, 1600);
    }, [changePage]);

    const changeRegisterPage = () => {
        authRef.current.classList.add("register-mode");
        setChange(true);
    };
    // const initialState = { email: '', password: '' };
    // const [userData, setUserData] = useState(initialState);


    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (value) => {
        console.log('🚀 ~ file: index.js ~ line 47 ~ onSubmit ~ value', value);
        dispatch(login(value));
    };
    return (
        <section className="auth-container" ref={authRef}>
            {run ? <Redirect to="/register" /> : ""}
            <div className="auth-container__forms">
                <div className="signin-signup">
                    <h2 className="title">LOGIN</h2>
                    <FormLogin className="sign-in-form" />
                    <ThirdParty />
                    {/* <form action="#" className="sign-in-form">
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Email"
                                {...register("email")}
                            />
                        </div>
                        {errors.email?.message && <p className="errors"><span>{errors.email.message} </span></p>}

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                            />
                        </div>
                        {errors.password?.message && <p className="errors"><span>{errors.password.message} </span></p>}

                        <input
                            onClick={handleSubmit(onSubmit)}
                            type="submit"
                            value="Login"
                            className="btn solid"
                        />
                        <p className="social-text">Or Login with social platforms</p>
                        <div className="social-media">
                            <a href="google.com" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="google.com" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="google.com" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="google.com" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form> */}
                </div>
            </div>

            <div className="auth-container__panels">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New member ?</h3>
                        <p>If you don't have an account, please register to continue</p>
                        <button
                            onClick={changeRegisterPage}
                            className="btn transparent"
                            id="sign-up-btn"
                        >
                            Register
                        </button>
                    </div>
                    <img src={AuthImages.LOGIN} className="image" alt="" />
                </div>
            </div>
        </section>
    )
}
