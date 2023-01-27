import React from "react";
import Button from "../../components/button/index";
import "./style.css";
const Presenter = props => (
    <div className="text-center">
        <main className="form-signup w-100 m-auto">
            <form className="g-3 needs-validation" onSubmit={props.handleSignUp} noValidate>
                <img className="mb-4" src="/assets/image/ax9.png" alt="" width="150" height="150" />
                <h1 className="h3 mb-3 fw-normal">Sing Up</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="fullName" name="fullName" required />
                    <label for="fullName">Full name</label>
                    <div className="invalid-feedback">
                        Full name is required
                    </div>
                </div>
                <div className="form-floating mt-3">
                    <input type="email" className="form-control" id="email" name="email" required />
                    <label for="email">Email</label>
                    <div className="invalid-feedback">
                        email is required
                    </div>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="telephone" name="telephone" required />
                    <label for="telephone">Phone number</label>
                    <div className="invalid-feedback">
                        Phone number is required
                    </div>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="username" name="username" required />
                    <label for="username">Username</label>
                    <div className="invalid-feedback">
                        Username is required
                    </div>
                </div>
                <div className="form-floating mt-3">
                    <input type="password" className="form-control" id="password" name="password" required />
                    <label for="password">Password</label>
                    <div className="invalid-feedback">
                        Password is required
                    </div>
                </div>

                <Button title="Register now" type="submit" className="w-100 btn btn-lg btn-primary" isLoadingMain={props.state.isLoadingMain}></Button>
                <button type="button" className="btn btn-link w-100 float-right" style={{ "padding": 0, "marginTop": 20 }} onClick={(e) => props.navigate("/sign-in")}>Go to Login</button>

                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
        </main>
    </div>
);

export default Presenter;