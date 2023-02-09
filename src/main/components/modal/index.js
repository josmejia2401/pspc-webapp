import React from 'react';
import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.onHandleOk = this.onHandleOk.bind(this);
        this.onHandleHide = this.onHandleHide.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        console.log("snapshot", snapshot);
        const { show } = prevProps;
        if (show !== prevState.show) {
            this.setState({ show: show });
        }
    }

    async onHandleOk(e) {
        const { onClickOk } = this.props;
        if (onClickOk) {
            await onClickOk(e);
        }
    }

    async onHandleHide(e) {
        const { onClickCancel } = this.props;
        if (onClickCancel) {
            await onClickCancel(e);
        }
        this.setState({ show: false });
    }

    render() {
        if (this.state.show) {
            return (<div className="modal fade show" tabIndex="-1" role="dialog" id="modalChoice" aria-labelledby="modalChoice" aria-modal="true" style={{ "display": "block" }}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-body p-4 text-center">
                            <h5 className="mb-0">Enable this setting?</h5>
                            <p className="mb-0">You can always change your mind in your account settings.</p>
                        </div>
                        <div className="modal-footer flex-nowrap p-0">
                            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end" onClick={this.onHandleOk}>
                                <strong>Yes, enable</strong>
                            </button>
                            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal" onClick={this.onHandleHide}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>);
        }
        return null;
    }
}

export default Container;