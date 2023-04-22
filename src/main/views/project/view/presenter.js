import React from "react";
import "./style.css";
import Menu from "../../../components/menu";
import Footer from "../../../components/footer";
import Modal from "../../../components/modal";
import Create from "../create";
import Edit from "../edit";
import Delete from "../delete";
import Constants from "../../../transversal/constants";

const Presenter = props => (
    <>
        <Menu {...props}></Menu>
        <Modal></Modal>
        {props.state.viewCreateItem === true && (<Create {...props.parentProps} handleOnCreateItem={props.handleOnCreateItem}></Create>)}
        {props.state.viewEditItem === true && (<Edit {...props.parentProps} itemSelected={props.state.itemSelected} handleOnEditItem={props.handleOnEditItem}></Edit>)}
        {props.state.viewDeleteItem === true && (<Delete {...props.parentProps} itemSelected={props.state.itemSelected} handleOnDeleteItem={props.handleOnDeleteItem}></Delete>)}
        <main className="container icon-examples" id="content">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb my-4 p-0">
                    <li className="breadcrumb-item"><a href="/projects">Projects</a></li>
                    <li className="breadcrumb-item active" aria-current="page">view</li>
                </ol>
            </nav>

            <div className="row align-items-md-center">
                <div className="col-md-6 col-lg-8">
                    <h1>Proyectos</h1>
                    <ul className="list-unstyled mb-3 mb-md-0">
                        <li><strong>Usuario:</strong> jox</li>
                    </ul>
                </div>
            </div>

            <hr className="my-4" />
            <div className="row gx-lg-5">
                <div className="col-lg-12 mb-4">
                    <h2>Proyectos</h2>
                    <div className="p-3 p-md-4 border rounded-3 icon-demo-examples">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th colSpan="3">
                                            <span className="material-icons material-symbols-outlined" onClick={props.handleOnCreateItem}>add</span>
                                            {
                                                props.state.itemSelected && <>
                                                    <span className="material-icons material-symbols-outlined" onClick={props.handleOnEditItem}>edit</span>
                                                    <span className="material-icons material-symbols-outlined" onClick={props.handleOnDeleteItem}>delete</span>
                                                </>
                                            }
                                        </th>
                                        <th colSpan="2">

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
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.state.data.map((item, i) => {
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
                                                        {Constants.STATUS[item.status] === "ACTIVE" && <label className="badge text-bg-success">{Constants.STATUS[item.status]}</label>}
                                                        {Constants.STATUS[item.status] !== "ACTIVE" && <label className="badge text-bg-danger">{Constants.STATUS[item.status]}</label>}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </>
);

export default Presenter;