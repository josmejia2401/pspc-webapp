import React from "react";
import Button from "../../components/button/index";
import "./style.css";
const Presenter = props => (
    <main className="form-signup w-100 m-auto">
        <form className="row g-3 needs-validation" onSubmit={props.handleSignIn} noValidate>
            <img className="mb-4" src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
            <div className="col-12">
                <label htmlFor="floatingName" className="form-label">Fullname</label>
                <input type="text" className="form-control" id="floatingName" name="fullName" placeholder="fullname" required />
                <div className="invalid-feedback">
                    Fullname is required
                </div>
            </div>

            <div className="col-12">
                <label htmlFor="floatingEmaul" className="form-label">Email</label>
                <input type="email" className="form-control" id="floatingEmail" name="email" placeholder="email@email.com" required />
                <div className="invalid-feedback">
                    Email is required
                </div>
            </div>

            <div className="col-12">
                <label htmlFor="floatingUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="floatingUsername" name="username" placeholder="username" required />
                <div className="invalid-feedback">
                    Username is required
                </div>
            </div>
            <div className="col-12">
                <label htmlFor="floatingPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" required />
                <div className="invalid-feedback">
                    Password is required
                </div>
            </div>

            <div className="col-12">
                <label htmlFor="floatingPhonenumber" className="form-label">Phone</label>
                <input type="text" className="form-control" id="floatingPhonenumber" name="phoneNumber" placeholder="3105555555" required />
                <div className="invalid-feedback">
                    Phone number is required
                </div>
            </div>
            <Button title="Register now" type="submit" isLoadingMain={props.state.isLoadingMain}></Button>
            <button type="button" className="btn btn-link" style={{ "textAlign": "left", "padding": 0 }} onClick={(e) => props.navigate("/sign-in")}>Sign in now</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
    </main>
);

export default Presenter;