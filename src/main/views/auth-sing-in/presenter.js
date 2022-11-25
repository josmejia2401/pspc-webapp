import React from 'react';
import './style.css';
const Presenter = props => (
    <div className="text-center">
        <form className="form-signin needs-validation" onSubmit={props.handleSignIn} noValidate>
            <img className="mb-4" src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputUsername" className="sr-only">Username</label>
            <input type="text" id="inputUsername" name="username" className="form-control" placeholder="Username" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" name='password' className="form-control" placeholder="Password" required />
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
    </div>
);

export default Presenter;