import React from 'react';
import './style.css';
import CustomButtom from "../button";
import { signOut } from "../../services/auth";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
        this.handleOnOpenMenuMobileItem = this.handleOnOpenMenuMobileItem.bind(this);
        this.handleOnOpenMenuMobile = this.handleOnOpenMenuMobile.bind(this);
        this.handleOnOpenConfigUser = this.handleOnOpenConfigUser.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount = () => {


    }


    handleOnOpenMenuMobile = (e) => {
        //const target = e.target || e.srcElement;
        //target.parentElement.parentElement.children[2].classList.toggle("show");

        document.getElementById("bdNavbar").classList.toggle("show");
    }

    handleOnOpenConfigUser = (e) => {
        //const target = e.target || e.srcElement;
        //target.parentElement.parentElement.children[2].classList.toggle("show");

        document.getElementById("idConfigUser").classList.toggle("show");
    }

    handleOnOpenMenuMobileItem(e) {
        const target = e.target || e.srcElement;
        //console.log(target.id);
        //target.classList.toggle("open");
        if (target.parentElement.children && target.parentElement.children.length > 0) {
            target.parentElement.children[1].classList.toggle("show");
        }
    }


    handleClose(e) {
        this.setState({ isLoading: true });
        signOut().then(() => {
            this.props.navigate(0);
            window.location.href("/");
        }).catch(error => {
            window.location.href("/");
        }).finally(() => this.setState({ isLoading: false }));
    }


    render() {
        return (<header className="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top" style={{ position: "absolute" }}>
            <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                <div className="d-lg-none" style={{ "width": "2.25rem" }}></div>
                <a className="navbar-brand p-0 me-0 me-lg-2" href="/" aria-label="pspc">
                    <img src="/assets/image/ax9.png" width={40} alt='pspc'></img>
                </a>
                <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="material-icons" onClick={(e) => this.handleOnOpenMenuMobile(e)}>more_horiz</span>
                </button>
                <div className="offcanvas-lg offcanvas-end flex-grow-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                    <div className="offcanvas-header px-4 pb-0">
                        <button type="button" className="navbar-toggler d-flex d-lg-none order-3 p-2" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" >
                            <span className="material-icons" onClick={(e) => this.handleOnOpenMenuMobile(e)}>close</span>
                        </button>
                    </div>
                    <div className="offcanvas-body p-4 pt-0 p-lg-0">
                        <hr className="d-lg-none text-white-50" />
                        <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav">
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2" rel="noopener">
                                    <span className="material-icons navbar-nav-svg">home</span>
                                    <small className="ms-2">Home</small>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2 active" href='/projects/view' rel="noopener">
                                    <span className="material-icons navbar-nav-svg">splitscreen</span>
                                    <small className="ms-2">Projects</small>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2 active" href='/users-story/view' rel="noopener">
                                    <span className="material-icons navbar-nav-svg">web_stories</span>
                                    <small className="ms-2">User history</small>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2 active" href='/tasks/view' rel="noopener">
                                    <span className="material-icons navbar-nav-svg">task</span>
                                    <small className="d-lg-none ms-2">Tasks</small>
                                </a>
                            </li>
                        </ul>

                        <hr className="d-lg-none text-white-50" />

                        <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2" href="https://github.com/twbs" target="_blank" rel="noopener">
                                    <span className="material-icons navbar-nav-svg">bug_report</span>
                                    <small className="d-lg-none ms-2">GitHub</small>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2" href="https://github.com/twbs" target="_blank" rel="noopener">
                                    <span className="material-icons navbar-nav-svg">report_problem</span>
                                    <small className="d-lg-none ms-2">report_problem</small>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2" href="https://github.com/twbs" target="_blank" rel="noopener">
                                    <span className="material-icons navbar-nav-svg">report</span>
                                    <small className="d-lg-none ms-2">report</small>
                                </a>
                            </li>

                            <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                                <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                                <hr className="d-lg-none my-2 text-white-50" />
                            </li>

                            <li className="nav-item dropdown">
                                <button className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                                    type="button" aria-expanded="false" data-bs-toggle="dropdown"
                                    data-bs-display="static" onClick={(e) => this.handleOnOpenConfigUser(e)}>
                                    <span className="material-icons">account_circle</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="idConfigUser" id="idConfigUser" style={{ "--bs-dropdown-min-width": "8rem" }} data-bs-popper="static" >
                                    <li>
                                        <CustomButtom
                                            title={<><span className="material-icons me-2 opacity-50">logout</span> Cerrar sesión</>}
                                            isLoadingMain={this.state.isLoading}
                                            type="button"
                                            className="dropdown-item"
                                            data-bs-dismiss="modal"
                                            onClick={this.handleClose}
                                            disabled={this.state.isLoading}>
                                        </CustomButtom>
                                        {/*
                                        <a className="dropdown-item" href="#" onClick={this.handleClose}>
                                            <span className="material-icons me-2 opacity-50">logout</span> Cerrar sesión
                                        </a>
                                        */}
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>);
    }
}

export default Container;