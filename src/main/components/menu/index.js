import React from 'react';
import './style.css';
import { signOut } from "../../services/auth";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleOnClickMenuItem = this.handleOnClickMenuItem.bind(this);
        this.handleOnClickMenu = this.handleOnClickMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount = () => { }


    handleOnClickMenu = (e) => {
        const target = e.target || e.srcElement;
        target.parentElement.parentElement.children[2].classList.toggle("show");
    }

    handleOnClickMenuItem(e) {
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
        return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid" style={{ "paddingLeft": "15px", "paddingRight": "15px" }}>
                <a className="navbar-brand" href="#">PSPC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={(e) => this.handleOnClickMenu(e)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item dropdown" onClick={(e) => this.handleOnClickMenuItem(e)}>
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">User</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/user/activate">Activate user</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>

                    <div className="btn-group dropleft">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => this.handleOnClickMenuItem(e)}>
                            Settings
                        </button>
                        <div className="dropdown-menu  dropdown-menu-rleft">
                            <button className="dropdown-item" type="button" onClick={this.handleClose}>Sign out</button>
                        </div>
                    </div>


                </div>
            </div>
        </nav>);
    }
}

export default Container;