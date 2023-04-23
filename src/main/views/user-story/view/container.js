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
    }

    componentDidMount() {
        this.onLoadData();
    }

    onLoadData = async () => {
        this.setState({ isLoading: true });
        getAll().then(data => {
            this.setState({ data });
        }).catch(e => {
            this.props.addNotification({ typeToast: 'error', text: e.message, title: "ERROR" });
        }).finally(() => this.setState({ isLoading: false }));
    }

    handleOnCreateItem = async () => {
        this.setState({ viewCreateItem: !this.state.viewCreateItem });
    }

    handleOnEditItem = async () => {
        this.setState({ viewEditItem: !this.state.viewEditItem });
    }

    handleOnDeleteItem = async () => {
        this.setState({ viewDeleteItem: !this.state.viewDeleteItem });
    }

    async handleOnSelectedItem(e, item) {
        if (this.state.itemSelected && this.state.itemSelected.id === item.id) {
            this.setState({ itemSelected: undefined });
        } else {
            this.setState({ itemSelected: item });
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