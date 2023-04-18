import * as React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthRouteComponent, AuthProvider, RouteComponent } from "./main/transversal/context";
import './App.css';
import AuthSignIn from './main/views/auth/sing-in';
import AuthSignUp from './main/views/auth/sing-up';
import ProjectView from './main/views/project/view';
import Home from './main/views/home';
//const Home = React.lazy(() => import("./main/views/home"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/sign-in" element={<RouteComponent children={AuthSignIn}></RouteComponent>} />
          <Route exact path="/sign-up" element={<RouteComponent children={AuthSignUp}></RouteComponent>} />
          <Route exact path="/home" element={<AuthRouteComponent children={Home}></AuthRouteComponent>} />
          <Route exact path="/projects/view" element={<AuthRouteComponent children={ProjectView}></AuthRouteComponent>} />
          <Route path="*" element={<Navigate to={"/sign-in"} replace></Navigate>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
/*
function App() {
  return (
    <AuthProvider>
      <Router>
        <React.Suspense fallback={<AuthLoading></AuthLoading>}>
          <Routes>
            <Route exact path="/sign-in" element={<RouteComponent children={AuthSignIn}></RouteComponent>} />
            <Route exact path="/sign-up" element={<RouteComponent children={AuthSignUp}></RouteComponent>} />
            <Route exact path="/home" element={<AuthRouteComponent children={Home}></AuthRouteComponent>} />
            <Route exact path="/projects/view" element={<AuthRouteComponent children={ProjectView}></AuthRouteComponent>} />
            <Route exact path="/user/activate" element={<AuthRouteComponent children={UserActivate}></AuthRouteComponent>} />
            <Route exact path="/user/validate" element={<AuthRouteComponent children={UserValidate}></AuthRouteComponent>} />
            <Route path="*" element={<Navigate to={"/sign-in"} replace></Navigate>} />
          </Routes>
        </React.Suspense>
      </Router>
    </AuthProvider>
  );
}*/
export default App;
