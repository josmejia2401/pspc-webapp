import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUserInfo, setUserInfo, cleanAll } from "../auth";

export const AuthContext = React.createContext({
    getUserInfo: getUserInfo,
    setUserInfo: setUserInfo,
});

export const AuthProvider = (props) => {
    const { children } = props;
    return (
        <AuthContext.Provider value={{ getUserInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthRouteComponent = ({ children: Component, ...props }) => {
    const { getUserInfo } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    React.useEffect(() => {
        if (!getUserInfo()) {
            cleanAll();
            navigate("/sign-in");
        }
    }, [props?.location?.pathname, getUserInfo, navigate]);
    return <Component
        {...props}
        location={location}
        navigate={navigate}
    ></Component>;
};

export const RouteComponent = ({ children: Component, ...props }) => {
    const { getUserInfo } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    React.useEffect(() => {
        if (getUserInfo()) {
            navigate("/home");
        }
    }, [props?.location?.pathname, getUserInfo, navigate]);
    return <Component
        {...props}
        location={location}
        navigate={navigate}
    ></Component>;
};