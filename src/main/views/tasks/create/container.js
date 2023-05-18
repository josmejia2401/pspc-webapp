import React from 'react';
import Presenter from './presenter';
import { AuthContext } from "../../../transversal/context";
import { getJsonOfForm } from '../../../transversal/utils/form';
import { create } from '../../../services/tasks';

class Container extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoadingAction: false,
            isLoading: false,
            itemSelected: undefined
        };
        this.handleOnCreate = this.handleOnCreate.bind(this);
        this.handleOnHide = this.handleOnHide.bind(this);
        this.onLoadData = this.onLoadData.bind(this);
    }

    componentDidMount() {
        this.onLoadData();
    }
    
    onLoadData = async () => {
        const { projectId, usersStoryId } = this.props;
        this.setState({ projectId, usersStoryId });
    }

    handleOnCreate = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { projectId, usersStoryId } = this.state;
        if (!projectId || !usersStoryId) {
            this.props.addNotification({ typeToast: 'error', text: "Project or Users story is not defined", title: "ERROR" });
            return;
        }
        //const { setUserInfo, getUserInfo } = this.context;
        const form = e.target;
        const isValid = form.checkValidity();
        if (isValid === true) {
            this.setState({ isLoadingAction: true });
            const payload = getJsonOfForm(form, {});
            payload.statusId = Number(payload.statusId);
            payload.phaseId = Number(payload.phaseId);
            payload.priorityId = Number(payload.priorityId);
            payload.actualTime = Number(payload.actualTime);
            payload.estimatedTime = Number(payload.estimatedTime);
            payload.programmingLanguages = payload.programmingLanguages.split(",");
            payload.technologies = payload.technologies.split(",");
            if (payload.startedAt === "") {
                delete payload.startedAt;
            }
            if (payload.completedAt === "") {
                delete payload.completedAt;
            }
            payload.projectId = projectId;
            payload.usersStoryId = usersStoryId;
            create(payload).then(_result => {
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