import React from "react";
import Button from "../../components/button/index";
import "./style.css";
const Presenter = props => (
    <section className="forms">
        <div className="container">
            <div className="logo">
                <a className="brand-logo" href="#">Personal Software Process</a>
            </div>
            <div className="forms-grid">
                <div className="login">
                    <span className="fas fa-sign-in-alt"></span>
                    <strong>Welcome</strong>
                    <span>Sign in with your account</span>
                    <form className="login-form needs-validation" onSubmit={props.handleSignIn} noValidate>
                        <div className="form">
                            <div className="form-row">
                                <label className="form-label" htmlFor="username">Username</label>
                                <input type="text" className="form-text" id="username" name="username" required />
                            </div>
                            <div className="form-row">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" className="form-text" id="password" name="password" required />
                            </div>
                            <div className="form-row button-login">
                                <Button title="Login" type="submit" className="btn btn-login" isLoadingMain={props.state.isLoadingMain}></Button>
                                <Button title="Register" type="submit" className="btn-register"></Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="copy-right">
                <p>&copy; 2023 PSPC. All rights reserved</p>
            </div>
        </div>
    </section>
);

export default Presenter;