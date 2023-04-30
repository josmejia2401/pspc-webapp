import React from "react";
import "./style.css";
import CustomButtom from "../../../components/button";

const Presenter = props => (
    <div className="modal fade show" tabIndex="-1" role="dialog" id="modalChoice" aria-labelledby="modalChoice" aria-modal="true" style={{ "display": "block" }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content rounded-3 shadow">
                <div className="modal-header">
                    <h5 className="modal-title">Update item</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => props.handleOnHide(e, false)}></button>
                </div>
                <div className="modal-body p-4 text-center">
                    {
                        props.state.isLoading === true ? (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <form className="login-form needs-validation" onSubmit={props.handleOnEditItem} noValidate>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" defaultValue={props.state.data?.name} required />
                                    <div id="nameHelp" className="form-text">Name of your project.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" defaultValue={props.state.data?.description} required />
                                </div>

                                <select className="form-select" aria-label="Status" name="status" id="status" defaultValue={props.state.data?.status}>
                                    <option disabled>Status</option>
                                    <option value={1}>ACTIVE</option>
                                    <option value={2}>INACTIVE</option>
                                </select>

                                <div className="mb-3">
                                    <label htmlFor="startedAt" className="form-label">Start date</label>
                                    <input type="date" className="form-control" id="startedAt" name="startedAt" defaultValue={props.state.data?.startedAt} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="completedAt" className="form-label">Completed date</label>
                                    <input type="date" className="form-control" id="completedAt" name="completedAt" defaultValue={props.state.data?.completedAt} />
                                </div>

                                <CustomButtom type="submit" className="btn btn-primary" title={"Update a record"} isLoadingMain={props.state.isLoadingAction}></CustomButtom>
                            </form>
                        )
                    }
                </div>
                <div className="modal-footer flex-nowrap p-0">
                    <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-12 m-0 rounded-0" data-bs-dismiss="modal" onClick={(e) => props.handleOnHide(e, false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Presenter;