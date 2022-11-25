import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../transversal/context";

class Container extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleSignIn = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { setUserInfo, getUserInfo } = this.context;
        setUserInfo("josssssssssssssssssss");
        console.log("getUserInfo", getUserInfo());
        this.props.navigate("/home");
    }
    render() {
        return <Presenter
            state={this.state}
            handleSignIn={this.handleSignIn}
        />;
    }
}
export default Container;