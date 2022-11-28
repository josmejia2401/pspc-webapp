import React from "react";
import Toast from '../../components/toast';
import { useNavigate, useLocation } from "react-router-dom";
import { getUserInfo, setUserInfo, getTokenInfo } from "../auth";

export const AuthContext = React.createContext({
    getUserInfo: getUserInfo,
    setUserInfo: setUserInfo,
    getTokenInfo: getTokenInfo,
});

export const AuthProvider = (props) => {
    const { children } = props;
    return (
        <AuthContext.Provider value={{ getUserInfo, setUserInfo, getTokenInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthRouteComponent = ({ children: Component, ...props }) => {
    const { getTokenInfo } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    React.useEffect(() => {
        if (!getTokenInfo()) {
            navigate("/sign-in");
        }
    }, [props?.location?.pathname, getTokenInfo, navigate]);
    return <Component
        {...props}
        location={location}
        navigate={navigate}
    ></Component>;
};

export const RouteComponent = ({ children: Component, ...props }) => {
    const { getTokenInfo } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const notificationRef = React.useRef(null);
    const addNotification = (value) => {
        notificationRef.current.addItem(value);
    }
    React.useEffect(() => {
        if (getTokenInfo()) {
            navigate("/home");
        }
    }, [props?.location?.pathname, getTokenInfo, navigate]);
    return <>
        <Toast ref={notificationRef} ></Toast>
        <Component
            {...props}
            location={location}
            navigate={navigate}
            addNotification={addNotification}></Component>
    </>;
};