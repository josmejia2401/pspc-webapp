import React from "react";
import Button from "../../components/button/index";
import Menu from "../../components/menu";
import "./style.css";
const Presenter = props => (
    <div className=" d-flex flex-column h-100 w-100" style={{ "padding": "5px" }}>
        <Menu></Menu>
        <main className="flex-shrink-0 form-signin m-auto">
            <div className="container">
                <form className="g-3 needs-validation" onSubmit={props.handleSignIn} noValidate>
                    <img className="img-fluid rounded mx-auto d-block" src="/assets/image/ax9.png" alt="" width="150" height="150" />
                    <h1 className="h3 mb-3 fw-normal text-center">Activate user</h1>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="floatingPhone" className="form-label">Telephone</label>
                            <input type="text" className="form-control" id="floatingPhone" name="telephone" placeholder="Telephone" required />
                            <div className="invalid-feedback">
                                Telephone is required
                            </div>
                        </div>
                    </div>
                    <Button title="Send OTP code" type="submit" className="w-100" isLoadingMain={props.state.isLoadingMain}></Button>
                    <button type="button" className="btn btn-link w-100 float-right" style={{ "padding": 0, "marginTop": 20 }} onClick={(e) => props.navigate(-1)}>Go to back</button>
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