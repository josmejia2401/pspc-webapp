import React from "react";
import "./style.css";
import CustomButtom from "../../../components/button";

const Presenter = props => (
    <div className="modal fade show" tabIndex="-1" role="dialog" id="modalChoice" aria-labelledby="modalChoice" aria-modal="true" style={{ "display": "block" }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content rounded-3 shadow">
                <div className="modal-header">
                    <h5 className="modal-title">Delete item</h5>
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
                            <p>¿Esta seguro que desea eliminar el recurso <b>{props.state.data?.name}</b>?</p>
                        )
                    }
                </div>
                <div className="modal-footer flex-nowrap p-0">
                    <CustomButtom
                        title={"Delete record"}
                        isLoadingMain={props.state.isLoadingAction}
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={props.handleOnDelete}
                        disabled={props.state.isLoading}>
                    </CustomButtom>
                    <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal" onClick={(e) => props.handleOnHide(e, false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Presenter;