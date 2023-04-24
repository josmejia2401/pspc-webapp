import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { getJsonOfForm } from '../../../transversal/utils/form';
import { create } from '../../../services/project';

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoadingAction: false,
            isLoading: false,
        };
        this.handleOnCreate = this.handleOnCreate.bind(this);
        this.handleOnHide = this.handleOnHide.bind(this);
    }

    handleOnCreate = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        //const { setUserInfo, getUserInfo } = this.context;
        const form = e.target;
        const isValid = form.checkValidity();
        if (isValid === true) {
            this.setState({ isLoadingAction: true });
            const data = getJsonOfForm(form, {});
            data.status = Number(data.status);
            if (data.startedAt === "") {
                delete data.startedAt;
            }
            if (data.completedAt === "") {
                delete data.completedAt;
            }
            create(data).then(_result => {
                form.reset();
                this.props.addNotification({ typeToast: 'info', text: "Item created", title: "SUCCESS" });
                this.handleOnHide(null, true);
            }).catch(error => {
                this.props.addNotification({ typeToast: 'error', text: error.message, title: "ERROR" });
            }).finally(() => this.setState({ isLoadingAction: false }));
        }
        form.classList.add('was-validated');
    }

    async handleOnHide(e, isSuccessful = false) {
        const { handleOnCreateItem } = this.props;
        if (handleOnCreateItem) {
            await handleOnCreateItem(e, isSuccessful);
        }
    }

    render() {
        return <Presenter
            state={this.state}
            {...this.props}
            handleOnCreate={this.handleOnCreate}
            handleOnHide={this.handleOnHide}
        />;
    }
}
export default Container;