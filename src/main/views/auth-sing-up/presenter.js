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
                    <strong>Welcome</strong>
                    <span>Sign up right now</span>
                    <form className="login-form needs-validation" onSubmit={props.handleSignUp} noValidate>
                        <div className="form">
                            <div className="form-row">
                                <label className="form-label" htmlFor="fullName">Full name</label>
                                <input type="text" className="form-text" id="fullName" name="fullName" required />
                            </div>
                            <div className="form-row">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" className="form-text" id="email" name="email" required />
                            </div>
                            <div className="form-row">
                                <label className="form-label" htmlFor="telephone">Telephone</label>
                                <input type="text" className="form-text" id="telephone" name="telephone" required />
                            </div>
                            <div className="form-row">
                                <label className="form-label" htmlFor="username">Username</label>
                                <input type="text" className="form-text" id="username" name="username" required />
                            </div>
                            <div className="form-row">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" className="form-text" id="password" name="password" required />
                            </div>
                            <div className="form-row button-login">
                                <Button title="Register" type="submit" className="btn-login" isLoadingMain={props.state.isLoadingMain}></Button>
                                <Button title="Login" type="button" className="btn-register" onClick={(e) => props.navigate("/sign-in")}></Button>
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