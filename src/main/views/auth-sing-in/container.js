import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../transversal/context";
import { signIn } from "../../services/auth";
import { getJsonOfForm } from "../../transversal/utils/form";

class Container extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    componentDidMount() {
        this.props.addNotification({ typeToast: 'error', text: 'Error al intentar realizar la operación; Validar credenciales.' });
    }

    handleSignIn = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { setUserInfo, getUserInfo } = this.context;
        const form = e.target;
        const isValid = form.checkValidity();
        if (isValid === true) {
            const data = getJsonOfForm(form, { username: "", password: "" });
            signIn(data).then(result => {
                setUserInfo("josssssssssssssssssss");
                console.log("getUserInfo", getUserInfo());
                this.props.navigate("/home");
            }).catch(error => {

            });
        }
        form.classList.add('was-validated');
    }
    render() {
        return <Presenter
            state={this.state}
            handleSignIn={this.handleSignIn}
        />;
    }
}
export default Container;