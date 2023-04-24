import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { getAll } from "../../../services/project";

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [],
            viewCreateItem: false,
            viewEditItem: false,
            viewDeleteItem: false,
            itemSelected: undefined,
        };
        this.onLoadData = this.onLoadData.bind(this);
        this.handleOnCreateItem = this.handleOnCreateItem.bind(this);
        this.handleOnSelectedItem = this.handleOnSelectedItem.bind(this);
        this.handleOnEditItem = this.handleOnEditItem.bind(this);
        this.handleOnDeleteItem = this.handleOnDeleteItem.bind(this);
        this.onClearItemSelected = this.onClearItemSelected.bind(this);
    }

    componentDidMount() {
        this.onLoadData();
    }

    onLoadData = async () => {
        this.setState({ isLoading: true });
        getAll().then(data => {
            this.setState({ data });
            this.onClearItemSelected();
        }).catch(e => {
            this.props.addNotification({ typeToast: 'error', text: e.message, title: "ERROR" });
        }).finally(() => this.setState({ isLoading: false }));
    }

    handleOnCreateItem = async (e, isSuccessful) => {
        this.setState({ viewCreateItem: !this.state.viewCreateItem });
        if (isSuccessful && isSuccessful === true) {
            this.onClearItemSelected();
            this.onLoadData();
        }
    }

    handleOnEditItem = async (e, isSuccessful) => {
        this.setState({ viewEditItem: !this.state.viewEditItem });
        if (isSuccessful && isSuccessful === true) {
            this.onClearItemSelected();
            this.onLoadData();
        }
    }

    handleOnDeleteItem = async (e, isSuccessful) => {
        this.setState({ viewDeleteItem: !this.state.viewDeleteItem });
        if (isSuccessful && isSuccessful === true) {
            this.onClearItemSelected();
            this.onLoadData();
        }
    }

    handleOnSelectedItem(e, item) {
        if (this.state.itemSelected && this.state.itemSelected.id === item.id) {
            this.setState({ itemSelected: undefined });
        } else {
            this.setState({ itemSelected: item });
        }
    }

    onClearItemSelected() {
        if (this.state.itemSelected) {
            this.setState({ itemSelected: undefined });
        }
    }

    render() {
        return <Presenter
            state={this.state}
            parentProps={this.props}
            handleOnCreateItem={this.handleOnCreateItem}
            handleOnSelectedItem={this.handleOnSelectedItem}
            handleOnEditItem={this.handleOnEditItem}
            handleOnDeleteItem={this.handleOnDeleteItem}
            onLoadData={this.onLoadData}
        />;
    }
}
export default Container;