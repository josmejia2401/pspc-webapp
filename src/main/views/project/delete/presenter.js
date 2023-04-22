import React from "react";
import "./style.css";

const Presenter = props => (
    <div className="modal fade show" tabIndex="-1" role="dialog" id="modalChoice" aria-labelledby="modalChoice" aria-modal="true" style={{ "display": "block" }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content rounded-3 shadow">
                <div className="modal-body p-4 text-center">
                    <p>¿Esta seguro que desea eliminar el recurso <b>{props.state.data?.name}</b>?</p>
                </div>
                <div className="modal-footer flex-nowrap p-0">
                    <button type="button" className="btn btn-lg btn-active fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal" onClick={props.handleOnDelete}>
                        Eliminar
                    </button>
                    <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal" onClick={props.handleOnHide}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Presenter;