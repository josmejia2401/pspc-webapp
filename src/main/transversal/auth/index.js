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
        return userInfo;
    }
    return null;
}

export const setAccessToken = (accessToken) => {
    return Storage.set("ACCESS_TOKEN", accessToken);
}

export const getTokenInfo = () => {
    const accessToken = Storage.get("ACCESS_TOKEN");
    console.log(">>>>>>>>>>>>>>>>>>>>", accessToken);
    console.log(">>>>>>>>>>>>>>>>>>>>", JSON.stringify(TokenUtil.decodeTokenJwt(accessToken)));
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
    console.log(">>>>>>>>>accessToken", accessToken);
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
