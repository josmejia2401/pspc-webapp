import React from 'react';
import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>);
    }
}

export default Container;