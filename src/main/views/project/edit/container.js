import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { getJsonOfForm } from '../../../transversal/utils/form';
import { updateById, getById } from '../../../services/project';

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoadingMain: false,
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
            getById(itemSelected.id).then(data => {
                this.setState({ data });
                console.log("data", data);
            }).catch(e => console.log(e));
        } else {
            this.props.addNotification({ typeToast: 'warn', text: "Item do not exist", title: "WARNING" });
            this.handleOnHide();
        }
    }

    handleOnEditItem = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { itemSelected } = this.props;
        //const { setUserInfo, getUserInfo } = this.context;
        const form = e.target;
        const isValid = form.checkValidity();
        if (isValid === true && itemSelected) {
            this.setState({ isLoadingMain: true });
            const data = getJsonOfForm(form, {});
            data.status = Number(data.status);
            if (data.startedAt === "") {
                delete data.startedAt;
            }
            if (data.completedAt === "") {
                delete data.completedAt;
            }
            updateById(itemSelected.id, data).then(_result => {
                form.reset();
                this.props.addNotification({ typeToast: 'info', text: "Item updated", title: "SUCCESS" });
                this.handleOnHide();
            }).catch(error => {
                this.props.addNotification({ typeToast: 'error', text: error.message, title: "ERROR" });
            }).finally(() => this.setState({ isLoadingMain: false }));
        }
        form.classList.add('was-validated');
    }

    async handleOnHide() {
        const { handleOnEditItem } = this.props;
        if (handleOnEditItem) {
            await handleOnEditItem();
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