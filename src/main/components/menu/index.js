import React from 'react';
import './style.css';
import { signOut } from "../../services/auth";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        signOut().then(() => {
            this.props.navigate(0);
        }).catch(error => {
            this.props.addNotification({ typeToast: 'error', text: error.message, title: "ERROR" });
        }).finally(() => this.setState({ isLoadingMain: false }));
    }


    render() {
        return (<header className="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top" style={{ position: "absolute" }}>
            <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                <div className="d-lg-none" style={{ "width": "2.25rem" }}></div>
                <a className="navbar-brand p-0 me-0 me-lg-2" href="https://getbootstrap.com/" aria-label="Bootstrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block my-1" viewBox="0 0 118 94"
                        role="img">
                        <title>Bootstrap</title>
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                            fill="currentColor" />
                    </svg>
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
                                <a className="nav-link py-2 px-0 px-lg-2 active" href='/user-story/view' rel="noopener">
                                    <span className="material-icons navbar-nav-svg">web_stories</span>
                                    <small className="ms-2">User history</small>
                                </a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2 active" rel="noopener">
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
                                <button className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
                                    <span className="material-icons" onClick={(e) => this.handleOnOpenConfigUser(e)}>account_circle</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="idConfigUser" id="idConfigUser" style={{ "--bs-dropdown-min-width": "8rem" }} data-bs-popper="static" >
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={this.handleClose}>
                                            <span className="material-icons me-2 opacity-50">logout</span> Cerrar sesión
                                        </a>
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