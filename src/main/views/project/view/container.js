import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { getAll } from "../../../services/project";
import { getJsonOfForm } from "../../../transversal/utils/form";

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoadingMain: false,
            data: []
        };
        this.onLoadData = this.onLoadData.bind(this);
    }

    componentDidMount() {
        console.log(">>>>>>>>>>>>>>>>");
        this.onLoadData();
    }

    onLoadData = async () => {
        getAll().then(data => {
            this.setState({ data });
        }).catch(e => console.log(e));
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
            /*signIn(data).then(_result => {
                form.reset();
                this.props.navigate("/home");
            }).catch(error => {
                this.props.addNotification({ typeToast: 'error', text: error.message });
            }).finally(() => this.setState({ isLoadingMain: false }));*/
        }
        form.classList.add('was-validated');
    }

    render() {
        return <Presenter
            state={this.state}
            {...this.props}
        />;
    }
}
export default Container;