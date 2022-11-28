import React from 'react';
import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleOnClickMenuItem = this.handleOnClickMenuItem.bind(this);
        this.handleOnClickMenu = this.handleOnClickMenu.bind(this);
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
            target.parentElement.children[0].classList.toggle("show");
        }
    }


    render() {
        return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PSPC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={(e) => this.handleOnClickMenu(e)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item" onClick={(e) => this.handleOnClickMenuItem(e)}>
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>);
    }
}

export default Container;