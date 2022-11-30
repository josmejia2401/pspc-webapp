import React from "react";
import Button from "../../components/button/index";
import "./style.css";
const Presenter = props => (
    <div className=" d-flex flex-column h-100 w-100">
        <main className="flex-shrink-0 form-signup m-auto w-100">
            <div className="container">
                <form className="g-3 needs-validation" onSubmit={props.handleSignIn} noValidate>
                    <img className="img-fluid rounded mx-auto d-block" src="/assets/image/ax9.png" alt="" width="150" height="150" />
                    <h1 className="h3 mb-3 fw-normal text-center">Sign Up</h1>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="floatingFullname" className="form-label">Fullname</label>
                            <input type="text" className="form-control" id="floatingFullname" name="fullName" placeholder="Fullname" required />
                            <div className="invalid-feedback">
                                Fullname is required
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="floatingEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="floatingEmail" name="email" placeholder="email" required />
                            <div className="invalid-feedback">
                                Email is required
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="floatingPhonenumber" className="form-label">Phone number</label>
                            <input type="text" className="form-control" id="floatingPhonenumber" name="phoneNumber" placeholder="phone" required />
                            <div className="invalid-feedback">
                                Phone is required
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="floatingUsername" className="form-label">Username</label>
                            <input type="text" className="form-control" id="floatingUsername" name="username" placeholder="username" required />
                            <div className="invalid-feedback">
                                Username is required
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="floatingPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" required />
                            <div className="invalid-feedback">
                                Password is required
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                    </div>
                    <Button title="Register now" type="submit" className="w-100" isLoadingMain={props.state.isLoadingMain}></Button>
                    <button type="button" className="btn btn-link w-100 float-right" style={{ "padding": 0, "marginTop": 10 }} onClick={(e) => props.navigate("/sign-in")}>Go to Login</button>
                </form>
            </div>
        </main>
        <footer className="footer">
            {/*<ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
            </ul> */}
            <p className="text-center text-muted">&copy; 2022 PSPC</p>
        </footer>

    </div>
);

export default Presenter;