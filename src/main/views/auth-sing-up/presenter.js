import React from "react";
import Button from "../../components/button/index";
import "./style.css";
const Presenter = props => (
    <main className="form-signin w-100 m-auto">
        <form className="row g-3 needs-validation" onSubmit={props.handleSignIn} noValidate>
            <img className="mb-4" src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <Button title="Sign-in" type="submit" isLoadingMain={props.state.isLoadingMain}></Button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
    </main>
);

export default Presenter;