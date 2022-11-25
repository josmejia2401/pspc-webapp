import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthRouteComponent, AuthProvider, RouteComponent } from "./main/transversal/context";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AuthLoading from './main/views/auth-loading';
const AuthSignIn = React.lazy(() => import("./main/views/auth-sing-in"));
const AuthLoading1 = React.lazy(() => import("./main/views/auth-loading"));
function App() {
  return (
    <AuthProvider>
      <Router>
        <React.Suspense fallback={<AuthLoading></AuthLoading>}>
          <Routes>
            <Route exact path="/sign-in" element={<RouteComponent children={AuthSignIn}></RouteComponent>} />
            <Route exact path="/home" element={<AuthRouteComponent children={AuthLoading1}></AuthRouteComponent>} />
            <Route path="*" element={<Navigate to={"/sign-in"} replace></Navigate>} />
          </Routes>
        </React.Suspense>
      </Router>
    </AuthProvider>
  );
}
/*
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/sign-in" element={<RouteComponent children={AuthSignIn}></RouteComponent>} />
          <Route exact path="/home" element={<AuthRouteComponent children={AuthLoading1} ></AuthRouteComponent>} />
          <Route path="*" element={<Navigate to={"/sign-in"} replace></Navigate>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}*/
export default App;
