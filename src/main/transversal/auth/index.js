import Storage from "../storage";
import TokenUtils from "../auth/token";
import TokenUtil from "../auth/token";
import { CustomError } from "../error";
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
        return userInfo;
    }
    return null;
}

export const setAccessToken = (accessToken) => {
    return Storage.set("ACCESS_TOKEN", accessToken);
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

export const buildAndThrowNewError = (error) => {
    if (error && error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
            cleanAll();
        }
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
        throw new CustomError(error.response.data["message"], error.response.data["code"], error.response.status);
    }
    throw error;
}

export const buildHeaders = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
        return {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*'
        };
    }
    return {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": '*'
    };
}
