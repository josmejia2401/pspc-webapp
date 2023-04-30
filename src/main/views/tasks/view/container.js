import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { getAll } from "../../../services/tasks";

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [],
            dataFiltered: [],
            projectId: undefined,
            usersStoryId: undefined,
            queryData: {
                lastEvaluatedKey: undefined,
                segment: 0,
                currentRowsNumber: 0,
            },
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
        this.handleOnChangeFilter = this.handleOnChangeFilter.bind(this);
        this.onPaginationLoadData = this.onPaginationLoadData.bind(this);
    }

    componentDidMount() {
        this.onLoadData();
    }

    onLoadData = async () => {
        const projectId = new URLSearchParams(this.props.location.search).get("projectId");
        const usersStoryId = new URLSearchParams(this.props.location.search).get("usersStoryId");
        this.setState({ isLoading: true, data: [], dataFiltered: [], projectId, usersStoryId });
        getAll({
            lastEvaluatedKey: undefined,
            segment: undefined,
            limit: 10,
            projectId: projectId,
            usersStoryId: usersStoryId,
        }).then(result => {
            result.results.map(p => {
                p.createdAt = new String(p.createdAt).split(".")[0];
                p.createdAt = new Date(p.createdAt);
                return p;
            });
            result.results.sort((a, b) => a.createdAt.getTime() > b.createdAt.getTime());
            this.setState({
                data: result.results,
                dataFiltered: result.results,
                queryData: {
                    lastEvaluatedKey: result.lastEvaluatedKey,
                    segment: result.segment,
                    currentRowsNumber: result.currentRowsNumber,
                }
            });
            this.onClearItemSelected();
        }).catch(e => {
            this.props.addNotification({ typeToast: 'error', text: e.message, title: "ERROR" });
        }).finally(() => this.setState({ isLoading: false }));
    }

    onPaginationLoadData = async () => {
        const { queryData, projectId, usersStoryId } = this.state;
        if (!queryData.lastEvaluatedKey) {
            return;
        }
        this.setState({ isLoading: true });
        getAll({
            lastEvaluatedKey: queryData.lastEvaluatedKey,
            segment: queryData.segment,
            limit: 10,
            projectId: projectId,
            usersStoryId: usersStoryId,
        }).then(result => {
            this.state.data.push(...result.results);
            this.state.data.map(p => {
                p.createdAt = new String(p.createdAt).split(".")[0];
                p.createdAt = new Date(p.createdAt);
                return p;
            });
            //this.state.data.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
            this.setState({
                data: this.state.data,
                dataFiltered: this.state.data,
                queryData: {
                    lastEvaluatedKey: result.lastEvaluatedKey,
                    segment: result.segment,
                    currentRowsNumber: result.currentRowsNumber,
                }
            });
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

    async handleOnSelectedItem(e, item) {
        if (this.state.itemSelected && this.state.itemSelected.id === item.id) {
            this.setState({ itemSelected: undefined });
        } else {
            this.setState({ itemSelected: item });
        }
    }

    async onClearItemSelected() {
        if (this.state.itemSelected) {
            this.setState({ itemSelected: undefined });
        }
    }

    async handleOnChangeFilter(e) {
        if (e && e.target.value.length > 2) {
            const { data } = this.state;
            const dataFiltered = data.filter(p => p.description.includes(e.target.value) || p.name.includes(e.target.value));
            this.setState({ dataFiltered });
        } else if (e.target.value === "") {
            const { data } = this.state;
            this.setState({ dataFiltered: data });
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
            handleOnChangeFilter={this.handleOnChangeFilter}
            onPaginationLoadData={this.onPaginationLoadData}
        />;
    }
}
export default Container;