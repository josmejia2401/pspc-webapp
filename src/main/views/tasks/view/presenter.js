import React from "react";
import "./style.css";
import Menu from "../../../components/menu";
import Footer from "../../../components/footer";
import Modal from "../../../components/modal";
import Create from "../create";
import Edit from "../edit";
import Delete from "../delete";
import Constants from "../../../transversal/constants";
import CustomButtom from "../../../components/button";

const Presenter = props => (
    <>
        <Menu {...props.parentProps}></Menu>
        <Modal  {...props.parentProps}></Modal>
        {props.state.viewCreateItem === true && (<Create
            {...props.parentProps}
            handleOnCreateItem={props.handleOnCreateItem}
            projectId={props.state.queryData.projectId}
            usersStoryId={props.state.queryData.usersStoryId}>
        </Create>)}
        {props.state.viewEditItem === true && (<Edit {...props.parentProps} itemSelected={props.state.itemSelected} handleOnEditItem={props.handleOnEditItem}></Edit>)}
        {props.state.viewDeleteItem === true && (<Delete {...props.parentProps} itemSelected={props.state.itemSelected} handleOnDeleteItem={props.handleOnDeleteItem}></Delete>)}
        <div className="container-xxl bd-gutter mt-6 my-md-6" id="content">
            <main className="order-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb my-4 p-0">
                        <li className="breadcrumb-item"><a href="/tasks/view">Tasks</a></li>
                        <li className="breadcrumb-item active" aria-current="page">view</li>
                    </ol>
                </nav>

                <hr className="my-4" />
                <div className="bd-content ps-lg-2 col-lg-12 mb-4">
                    <div className="bd-intro pt-2 ps-lg-2">
                        <h2>Tasks</h2>
                        <div className="p-3 p-md-4 border rounded-3 icon-demo-examples justify-content-center">
                            <div className="table-responsive table-wrapper">
                                <table className="table table-hover">
                                    <caption>List of tasks</caption>
                                    <thead>
                                        <tr>
                                            <th colSpan="3">
                                                <span className="material-icons material-symbols-outlined" onClick={props.onLoadData}>refresh</span>
                                                <span className="material-icons material-symbols-outlined" onClick={props.handleOnCreateItem} style={{
                                                    marginLeft: 5
                                                }}>add</span>
                                                {
                                                    props.state.itemSelected && <>
                                                        <span className="material-icons material-symbols-outlined" onClick={props.handleOnEditItem} style={{
                                                            marginLeft: 5
                                                        }}>edit</span>
                                                        <span className="material-icons material-symbols-outlined" onClick={props.handleOnDeleteItem} style={{
                                                            marginLeft: 5
                                                        }}>delete</span>
                                                    </>
                                                }
                                            </th>
                                            <th colSpan="8">
                                                <input type="text" className="form-control" id="description" name="description" onChange={props.handleOnChangeFilter} />
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Started</th>
                                            <th scope="col">Completed</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Phase</th>
                                            <th scope="col">Estimated time</th>
                                            <th scope="col">Actual Time</th>
                                            <th scope="col">Delta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.state.isLoading === true ? (
                                                <tr>
                                                    <th scope="col" colSpan="11">
                                                        <div className="text-center">
                                                            <div className="spinner-border" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                    </th>
                                                </tr>
                                            ) : (
                                                props.state.dataFiltered.map((item, i) => {
                                                    return (
                                                        <tr key={i} onClick={(e) => props.handleOnSelectedItem(e, item)} style={{
                                                            backgroundColor: `${props.state.itemSelected && item.id === props.state.itemSelected.id ? '#ddd' : 'unset'}`
                                                        }}>
                                                            <th scope="row">{i + 1}</th>
                                                            <td>{item.name}</td>
                                                            <td>{item.description}</td>
                                                            <td>{item.startedAt}</td>
                                                            <td>{item.completedAt}</td>
                                                            <td>
                                                                {Constants.STATUS[item.statusId] === "ACTIVE" && <label className="badge text-bg-success">{Constants.STATUS[item.statusId]}</label>}
                                                                {Constants.STATUS[item.statusId] !== "ACTIVE" && <label className="badge text-bg-danger">{Constants.STATUS[item.statusId]}</label>}
                                                            </td>
                                                            <td>
                                                                {<label className="badge text-bg-success">{Constants.PRIORITY[item.priorityId]}</label>}
                                                            </td>
                                                            <td>
                                                                {<label className="badge text-bg-success">{Constants.PHASE[item.phaseId]}</label>}
                                                            </td>
                                                            <td>{item.estimatedTime}</td>
                                                            <td>{item.actualTime}</td>
                                                            <td>{item.estimatedTime - item.actualTime}</td>
                                                        </tr>
                                                    )
                                                })
                                            )
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="col" colSpan="8" className="text-rigth"></th>
                                            <th scope="col" colSpan="1" className="ext-center">
                                                {props.state.totalEstimated}
                                            </th>
                                            <th scope="col" colSpan="1" className="text-left">
                                                {props.state.totalActual}
                                            </th>
                                            <th scope="col" colSpan="1" className="text-left">
                                                {props.state.totalEstimated - props.state.totalActual}
                                            </th>
                                        </tr>
                                        <tr>
                                            {
                                                props.state.isLoading === false && props.state.queryData.lastEvaluatedKey && <th scope="col" colSpan="11" className="text-center">
                                                    <CustomButtom
                                                        title={"Load more"}
                                                        isLoadingMain={props.state.isLoading}
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-bs-dismiss="modal"
                                                        onClick={props.onPaginationLoadData}
                                                        disabled={props.state.isLoading}>
                                                    </CustomButtom>
                                                </th>
                                            }
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <Footer></Footer>
    </>
);

export default Presenter;
