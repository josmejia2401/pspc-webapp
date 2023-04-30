import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { deleteById, getById } from '../../../services/users-story';

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoadingAction: false,
            isLoading: false,
            data: {}
        };
        this.handleOnDelete = this.handleOnDelete.bind(this);
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
            this.handleOnHide(null, false);
        }
    }

    handleOnDelete = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { itemSelected } = this.props;
        if (itemSelected) {
            this.setState({ isLoadingAction: true });
            deleteById(itemSelected.id).then(_result => {
                this.props.addNotification({ typeToast: 'info', text: "Item deleted", title: "SUCCESS" });
                this.handleOnHide(null, true);
            }).catch(error => {
                this.props.addNotification({ typeToast: 'error', text: error.message, title: "ERROR" });
            }).finally(() => this.setState({ isLoadingAction: false }));
        }
    }

    async handleOnHide(e, isSuccessful = false) {
        const { handleOnDeleteItem } = this.props;
        if (handleOnDeleteItem) {
            await handleOnDeleteItem(e, isSuccessful);
        }
    }

    render() {
        return <Presenter
            state={this.state}
            {...this.props}
            handleOnDelete={this.handleOnDelete}
            handleOnHide={this.handleOnHide}
        />;
    }
}
export default Container;