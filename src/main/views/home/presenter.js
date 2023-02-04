import React from "react";
import "./style.css";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
const Presenter = props => (
    <>
        <Menu {...props}></Menu>
        <main className="container icon-examples" id="content">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb my-4 p-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </nav>

            <div className="row align-items-md-center">
                <div className="col-md-6 col-lg-8">
                    <h1>Download</h1>
                    <ul className="list-unstyled mb-3 mb-md-0">
                        <li><strong>Tags:</strong> arrow, network, save</li>
                        <li><strong>Category:</strong> Miscellaneous</li>
                    </ul>
                </div>
            </div>

            <hr className="my-4" />
            <div className="row gx-lg-5">
                <div className="col-lg-8 mb-4">
                    <h2>Examples</h2>
                    <div className="p-3 p-md-4 border rounded-3 icon-demo-examples">
                        <div className="fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                                viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                            Heading
                        </div>
                        <div className="fs-4 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                                viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                            Smaller heading
                        </div>
                        <p>
                            Inline text <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-download" viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </p>
                        <p>
                            <a href="#" className="text-decoration-none">
                                Example link text
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                            </a>
                        </p>
                        <p>
                            <button type="button" className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                                Button
                            </button>
                            <button type="button" className="btn btn-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                                Button
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                                Button
                            </button>
                        </p>
                        <div className="mb-3">
                            <button type="button" className="btn btn-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                            </button>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-download" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                    </svg>
                                    <span className="visually-hidden">Button</span>
                                </button>
                                <button type="button" className="btn btn-outline-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-download" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                    </svg>
                                    <span className="visually-hidden">Button</span>
                                </button>
                                <button type="button" className="btn btn-outline-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-download" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                    </svg>
                                    <span className="visually-hidden">Button</span>
                                </button>
                            </div>
                        </div>
                        <div className="input-group w-50">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                            </span>
                            <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example"
                                aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <h2 className="fs-3">Download</h2>
                    <p>Download the SVG to use or edit.</p>
                    <a href="https://icons.getbootstrap.com/assets/icons/download.svg" className="btn btn-bd-primary mb-4"
                        download>Download SVG</a>

                    <h2 className="fs-3">Icon font</h2>
                    <p>Using the web font? Copy, paste, and go.</p>

                    <div className="mb-4">
                        <div className="highlight">
                            <pre tabIndex="0"
                                className="chroma"><code className="language-html" data-lang="html"><span className="line"><span className="cl"><span className="p">&lt;</span><span className="nt">i</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;bi bi-download&#34;</span><span className="p">&gt;&lt;/</span><span className="nt">i</span><span className="p">&gt;</span></span></span></code></pre>
                        </div>
                    </div>

                    <h2 className="fs-3">Code point</h2>
                    <div className="mb-4">

                        <ul className="list-unstyled">
                            <li>
                                Unicode: <code>U+F30A</code>
                            </li>
                            <li>
                                CSS: <code>\F30A</code>
                            </li>
                            <li>
                                JS: <code>\uF30A</code>
                            </li>
                            <li>
                                HTML: <code>&amp;#xF30A;</code>
                            </li>
                        </ul>
                    </div>

                    <h2 className="fs-3">Copy HTML</h2>
                    <p>Paste the SVG right into your project's code.</p>

                    <div id="copy-error-callout" className="alert alert-info d-none" role="alert"></div>

                    <div className="highlight">
                        <pre tabIndex="0"
                            className="chroma"><code className="language-html" data-lang="html"><span className="line"><span className="cl"><span className="p">&lt;</span><span className="nt">svg</span> <span className="na">xmlns</span><span className="o">=</span><span className="s">&#34;http://www.w3.org/2000/svg&#34;</span> <span className="na">width</span><span className="o">=</span><span className="s">&#34;16&#34;</span> <span className="na">height</span><span className="o">=</span><span className="s">&#34;16&#34;</span> <span className="na">fill</span><span className="o">=</span><span className="s">&#34;currentColor&#34;</span> <span className="na">class</span><span className="o">=</span><span className="s">&#34;bi bi-download&#34;</span> <span className="na">viewBox</span><span className="o">=</span><span className="s">&#34;0 0 16 16&#34;</span><span className="p">&gt;</span>
                            </span></span><span className="line"><span className="cl">  <span className="p">&lt;</span><span className="nt">path</span> <span className="na">d</span><span className="o">=</span><span className="s">&#34;M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z&#34;</span><span className="p">/&gt;</span>
                            </span></span><span className="line"><span className="cl">  <span className="p">&lt;</span><span className="nt">path</span> <span className="na">d</span><span className="o">=</span><span className="s">&#34;M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z&#34;</span><span className="p">/&gt;</span>
                            </span></span><span className="line"><span className="cl"><span className="p">&lt;/</span><span className="nt">svg</span><span className="p">&gt;</span></span></span></code></pre>
                    </div>
                </div>
            </div>
        </main>
        <Footer></Footer>
    </>
);

export default Presenter;