import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../transversal/context";
import { activate } from "../../services/user";
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

    componentDidMount() {
        this.props.addNotification({ typeToast: 'info', text: "Al teléfono registrado se ha enviado el OTP", title: "INFO" });
    }

    handleSignIn = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        //const { setUserInfo, getUserInfo } = this.context;
        const form = e.target;
        const isValid = form.checkValidity();
        if (isValid === true) {
            this.setState({ isLoadingMain: true });
            const data = getJsonOfForm(form, { otp: "" });
            activate(2, data).then(async (_result) => {
                form.reset();
                this.props.addNotification({ typeToast: 'info', text: "Activación exitosa", title: "INFO" });
                const sleep = ms => new Promise(r => setTimeout(r, ms));
                await sleep(5000);
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