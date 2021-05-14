import React, { useEffect, useRef, useState } from 'react';
import { AuthImages } from 'constants/images'
import './Login.scss';
import { Redirect } from 'react-router';

import { login } from 'redux/actions/authAction';
import { useDispatch } from 'react-redux';
import FormLogin from 'components/FormLogin';
import ThirdParty from 'components/ThirdParty';

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
    }
    // const initialState = { email: '', password: '' };
    // const [userData, setUserData] = useState(initialState);

    const onSubmit = (value) => {
        console.log('🚀 ~ file: index.js ~ line 47 ~ onSubmit ~ value', value);
        
        dispatch(login(value));
    }

    return (
        <section className="auth-container" ref={authRef}>
            {run ? <Redirect to="/register" /> : ""}
            <div className="auth-container__forms">
                <h2 className="title">Login</h2>
                <div className="signin-signup">
                    <FormLogin className="sign-in-form" title="LOG IN" onSubmit={onSubmit} />
                    <ThirdParty />
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
