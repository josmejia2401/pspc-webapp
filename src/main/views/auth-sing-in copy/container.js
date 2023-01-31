import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../transversal/context";
import { signIn } from "../../services/auth";
import { getJsonOfForm } from "../../transversal/utils/form";

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoadingMain: false
        };
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleSignIn = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        //const { setUserInfo, getUserInfo } = this.context;
        const form = e.target;
        const isValid = form.checkValidity();
        if (isValid === true) {
            this.setState({ isLoadingMain: true });
            const data = getJsonOfForm(form, { username: "", password: "" });
            signIn(data).then(_result => {
                form.reset();
                this.props.navigate("/home");
            }).catch(error => {
                this.props.addNotification({ typeToast: 'error', text: error.message, title: "ERROR" });
            }).finally(() => this.setState({ isLoadingMain: false }));
        }
        form.classList.add('was-validated');
    }

    render() {
        return <Presenter
            state={this.state}
            handleSignIn={this.handleSignIn}
            {...this.props}
        />;
    }
}
export default Container;