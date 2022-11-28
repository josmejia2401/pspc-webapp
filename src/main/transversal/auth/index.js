import Storage from "../storage";
import TokenUtils from "../auth/token";
import TokenUtil from "../auth/token";
export const getUserInfo = () => {
    const userInfo = Storage.get("USER_INFO");
    if (userInfo) {
        return JSON.parse(userInfo);
    }
    return null;
}

export const setUserInfo = (userInfo) => {
    return Storage.set("USER_INFO", JSON.stringify(userInfo));
}

export const getAccessToken = () => {
    const userInfo = Storage.get("ACCESS_TOKEN");
    if (userInfo) {
        return JSON.parse(userInfo);
    }
    return null;
}

export const setAccessToken = (accessToken) => {
    return Storage.set("ACCESS_TOKEN", JSON.stringify(accessToken));
}

export const getTokenInfo = () => {
    const accessToken = Storage.get("ACCESS_TOKEN");
    if (accessToken && TokenUtil.isValidToken(accessToken)) {
        return TokenUtils.getInfoToken(accessToken);
    }
    cleanAll();
    return null;
}

export const cleanAll = () => {
    return Storage.clear();
}

export const buildHeaders = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
        return {
            Authorization: `Bearer ${getAccessToken()}`,
            "Content-Type": "application/json"
        };
    }
    return {
        "Content-Type": "application/json"
    };
}