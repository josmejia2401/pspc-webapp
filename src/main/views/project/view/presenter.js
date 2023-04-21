import React from "react";
import "./style.css";
import Menu from "../../../components/menu";
import Footer from "../../../components/footer";
import Modal from "../../../components/modal";
import Create from "../create";

const Presenter = props => (
    <>
        <Menu {...props}></Menu>
        <Modal></Modal>
        {props.state.viewCreateItem === true && (<Create {...props}></Create>)}
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
                                        <th colSpan="5"></th>
                                        <th colSpan="2">
                                            <button type="button" className="btn btn-primary" onClick={props.handleOnCreateItem}>+</button>
                                        </th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Started</th>
                                        <th scope="col">Completed</th>
                                        <th scope="col">Progress</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Progress2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.state.data.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope="row">1</th>
                                                <td>{item.name}</td>
                                                <td>{item.startedAt}</td>
                                                <td>{item.completedAt}</td>
                                                <td className="text-success"> 82.00% <i className="ti-arrow-up"></i></td>
                                                <td><label className="badge text-bg-success">{item.status}</label></td>
                                                <td>
                                                    <div className="progress" role="progressbar"
                                                        style={{ height: "5px" }} aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                        <div htmlFor="progress-bar bg-success" style={{ "width": "25%" }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
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