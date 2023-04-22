import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { deleteById, getById } from '../../../services/project';

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoadingMain: false,
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
            getById(itemSelected.id).then(data => {
                this.setState({ data });
            }).catch(e => console.log(e));
        } else {
            this.props.addNotification({ typeToast: 'warn', text: "Item do not exist", title: "WARNING" });
            this.handleOnHide();
        }
    }

    handleOnDelete = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { itemSelected } = this.props;
        if (itemSelected) {
            deleteById(itemSelected.id).then(_result => {
                this.props.addNotification({ typeToast: 'info', text: "Item deleted", title: "SUCCESS" });
                this.handleOnHide();
            }).catch(error => {
                this.props.addNotification({ typeToast: 'error', text: error.message, title: "ERROR" });
            }).finally(() => this.setState({ isLoadingMain: false }));
        }
    }

    async handleOnHide() {
        const { handleOnDeleteItem } = this.props;
        if (handleOnDeleteItem) {
            await handleOnDeleteItem();
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