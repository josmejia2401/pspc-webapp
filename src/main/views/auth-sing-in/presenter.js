import React from "react";
import Button from "../../components/button/index";
import "./style.css";
const Presenter = props => (
    <main className="form-signin w-100 m-auto">
        <form className="g-3 needs-validation" onSubmit={props.handleSignIn} noValidate>
            <img className="img-fluid rounded mx-auto d-block" src="/assets/image/ax9.png" alt="" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="row mb-2">
                <div className="col-12">
                    <label htmlFor="floatingUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="floatingUsername" name="username" placeholder="username" required />
                    <div className="invalid-feedback">
                        Username is required
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-12">
                    <label htmlFor="floatingPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" required />
                    <div className="invalid-feedback">
                        Password is required
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
            </div>
            <Button title="Sign-in" type="submit" className="w-100" isLoadingMain={props.state.isLoadingMain}></Button>
            <button type="button" className="btn btn-link w-100 float-right" style={{ "padding": 0, "marginTop": 10 }} onClick={(e) => props.navigate("/sign-up")}>You have not an account?</button>
            <p className="mt-5 mb-3 text-muted text-center w-100">&copy; 2017–2022</p>
        </form>
    </main>
);

export default Presenter;