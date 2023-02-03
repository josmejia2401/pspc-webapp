import React from "react";
import "./style.css";
import Menu from "../../components/menu";
const Presenter = props => (
    <>
        <Menu {...props}></Menu>
        <main className="container icon-examples" id="content">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb my-4 p-0">
                    <li className="breadcrumb-item"><a href="https://icons.getbootstrap.com/">Icons</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Download</li>
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
                <div className="col-md-6 col-lg-4">
                    <script async src="https://cdn.carbonads.com/carbon.js?serve=CE7D4277&amp;placement=iconsgetbootstrapcom"
                        id="_carbonads_js"></script>

                </div>
            </div>

            <hr className="my-4" />
            <div className="row gx-lg-5">
                <div className="col-lg-8 mb-4">
                    <div className="icon-demo mb-4 border rounded-3 d-flex align-items-center justify-content-center p-3 py-6"
                        style={{ "fontSize": "10em" }} role="img" aria-label="Download - large preview">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download"
                            viewBox="0 0 16 16">
                            <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                    </div>

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
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <a className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none"
                            href="https://icons.getbootstrap.com/" aria-label="Bootstrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block me-2" viewBox="0 0 118 94"
                                role="img">
                                <title>Bootstrap</title>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                                    fill="currentColor" />
                            </svg>
                            <span className="fs-5">Bootstrap</span>
                        </a>
                        <ul className="list-unstyled small">
                            <li className="mb-2">Designed and built with all the love in the world by the <a
                                href="https://getbootstrap.com/docs/5.3/about/team/">Bootstrap team</a> with the help of <a
                                    href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                            <li className="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank"
                                rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/"
                                    target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://getbootstrap.com/">Home</a></li>
                            <li className="mb-2"><a href="https://getbootstrap.com/docs/5.3/">Docs</a></li>
                            <li className="mb-2"><a href="https://getbootstrap.com/docs/5.3/examples/">Examples</a></li>
                            <li className="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
                            <li className="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                            <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                            <li className="mb-2"><a href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Guides</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://getbootstrap.com/docs/5.3/getting-started/">Getting started</a></li>
                            <li className="mb-2"><a href="https://getbootstrap.com/docs/5.3/examples/starter-template/">Starter template</a>
                            </li>
                            <li className="mb-2"><a href="https://getbootstrap.com/docs/5.3/getting-started/webpack/">Webpack</a></li>
                            <li className="mb-2"><a href="https://getbootstrap.com/docs/5.3/getting-started/parcel/">Parcel</a></li>
                            <li className="mb-2"><a href="https://getbootstrap.com/docs/5.3/getting-started/vite/">Vite</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Projects</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/rfs">RFS</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter">npm starter</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Community</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                            <li className="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
                            <li className="mb-2"><a href="https://opencollective.com/bootstrap">Open Collective</a></li>
                            <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
);

export default Presenter;