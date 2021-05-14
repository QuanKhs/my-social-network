import React, { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { AuthImages } from "constants/images";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import './Register.scss';

const validationSchema = yup.object().shape({
    userName: yup.string()
        .required('First Name is required'),
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});


export default function Register(props) {
    const authRef = useRef(null);
    const [changePage, setChange] = useState(false);
    const [run, setRun] = useState(false);
    const [success, setSuccess] = useState(false);

    const changeLoginPage = () => {
        authRef?.current.classList.remove("register-mode");
        setChange(true);
    };

    useEffect(() => {
        if (!changePage) return;
        setTimeout(() => {

            setRun(true);
        }, 1600);
    }, [changePage]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (value) => {
    };

    return (
        <section className="auth-container register-mode" ref={authRef}>
            {success ? <Redirect to="/login" /> : ""}
            {run ? <Redirect to="/login" /> : ""}
            <div className="auth-container__forms">
                <div className="signin-signup">
                    <form action="#" className="sign-up-form">
                        <h2 className="title">REGISTER</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                {...register("userName")}
                            />
                        </div>
                        {errors.userName?.message && <p className="errors"><span>{errors.userName.message} </span></p>}

                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
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
                        {errors.password?.message && <p className="errors"> <span>{errors.password.message} </span></p>}
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                {...register("confirmPassword")}
                            />
                        </div>
                        {errors.confirmPassword?.message && <p className="errors"><span>{errors.confirmPassword.message} </span></p>}
                        <input
                            type="submit"
                            className="btn"
                            value="Sign up"
                            onClick={handleSubmit(onSubmit)}
                        />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="auth-container__panels">
                <div className="panel left-panel"></div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Welcome To MILO Network Platform </h3>
                        <p>
                            If you have registered for an account successfully please login to
                            experience our great services
                        </p>
                        <button
                            onClick={changeLoginPage}
                            className="btn transparent"
                            id="sign-in-btn"
                        >
                            Sign In
                        </button>
                    </div>
                    <img src={AuthImages.REGISTER} className="image" alt="" />
                </div>
            </div>
        </section>
    );
};