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
        return (<footer className="bd-footer mt-5 bg-body-tertiary">
            <div className="container px-md-3 text-body-secondary">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <a className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" href="/" aria-label="Bootstrap">
                            <img src="/assets/image/ax9.png" width={50} alt='pspc'></img>
                            <span className="fs-5">PSPC</span>
                        </a>
                        <ul className="list-unstyled small">
                            <li className="mb-2">Trabajando para ti</li>
                            <li className="mb-2">Code licensed <a href="h/" target="_blank"
                                rel="license noopener">MIT</a>.</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Projects</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/projects/vie">Ver todos</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Users story</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/users-story/view">Ver todos</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Tasks</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/tasks/view">Ver todos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>);
    }
}

export default Container;