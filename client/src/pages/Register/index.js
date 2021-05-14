import React, { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router";
import { AuthImages } from "constants/images";
import './Register.scss';
import FormRegister from "components/FormRegister";
import ThirdParty from "components/ThirdParty";

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

    const onSubmit = async (value) => {
        console.log('🚀 ~ file: index.js ~ line 28 ~ onSubmit ~ value', value);
    };

    return (
        <section className="auth-container register-mode" ref={authRef}>
            {success ? <Redirect to="/login" /> : ""}
            {run ? <Redirect to="/login" /> : ""}
            <div className="auth-container__forms">
                <div className="signin-signup">
                    <FormRegister className="sign-up-form" title="REGISTER" onSubmit={onSubmit} />
                    <ThirdParty />
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