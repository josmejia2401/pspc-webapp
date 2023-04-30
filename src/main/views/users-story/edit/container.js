import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { getJsonOfForm } from '../../../transversal/utils/form';
import { updateById, getById } from '../../../services/users-story';

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isLoadingAction: false,
            data: {}
        };
        this.handleOnEditItem = this.handleOnEditItem.bind(this);
        this.handleOnHide = this.handleOnHide.bind(this);
        this.onLoadData = this.onLoadData.bind(this);
    }

    componentDidMount() {
        this.onLoadData();
    }

    onLoadData = async () => {
        const { itemSelected } = this.props;
        if (itemSelected) {
            this.setState({ isLoading: true });
            getById(itemSelected.id).then(data => {
                this.setState({ data });
            }).catch(e => {
                this.props.addNotification({ typeToast: 'error', text: e.message, title: "ERROR" });
            }).finally(() => this.setState({ isLoading: false }));
        } else {
            this.props.addNotification({ typeToast: 'warn', text: "Item do not exist", title: "WARNING" });
            this.handleOnHide();
        }
    }

    handleOnEditItem = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { itemSelected } = this.props;
        const { data } = this.state;
        //const { setUserInfo, getUserInfo } = this.context;
        const form = e.target;
        const isValid = form.checkValidity();
        if (isValid === true && itemSelected) {
            this.setState({ isLoadingAction: true });
            const payload = getJsonOfForm(form, {});
            payload.status = Number(payload.status);
            if (payload.startedAt === "") {
                delete payload.startedAt;
            }
            if (payload.completedAt === "") {
                delete payload.completedAt;
            }
            //payload.projectId = data.projectId;
            updateById(itemSelected.id, payload).then(_result => {
                form.reset();
                this.props.addNotification({ typeToast: 'info', text: "Item updated", title: "SUCCESS" });
                this.handleOnHide(null, true);
            }).catch(error => {
                this.props.addNotification({ typeToast: 'error', text: error.message, title: "ERROR" });
            }).finally(() => this.setState({ isLoadingAction: false }));
        }
        form.classList.add('was-validated');
    }

    async handleOnHide(e, isSuccessful = false) {
        const { handleOnEditItem } = this.props;
        if (handleOnEditItem) {
            await handleOnEditItem(e, isSuccessful);
        }
    }

    render() {
        return <Presenter
            state={this.state}
            {...this.props}
            handleOnEditItem={this.handleOnEditItem}
            handleOnHide={this.handleOnHide}
        />;
    }
}
export default Container;