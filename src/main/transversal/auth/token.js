import { Utils } from "../utils/utils";

export default class TokenUtil {

    static getToken(authorization) {
        if (authorization && authorization.indexOf(" ") !== -1 && (authorization.includes("Bearer") || authorization.includes("bearer"))) {
            return authorization.split(" ")[1];
        }
        return authorization;
    }

    static decodeToken(authorization) {
        const token = TokenUtil.getToken(authorization);
        const userBase64 = token.split(".")[1];
        const s = Buffer.from(userBase64, 'base64').toString();
        return JSON.parse(s);
    }

    static decodeTokenJwt(token) {
        const newToken = TokenUtil.getToken(token);
        const values = newToken.split(".");
        const encodedHeader = values[0];
        const encodedPayload = values[1];
        const signature = values[2];
        return {
            help: "",
            header: JSON.parse(Utils.decode(encodedHeader)),
            payload: JSON.parse(Utils.decode(encodedPayload)),
            signature: signature
        };
    }

    static getInfoToken(authorization) {
        const tokenBase = TokenUtil.getToken(authorization);
        return TokenUtil.decodeTokenJwt(tokenBase);
    }

    static isValidToken(authorization) {
        const tokenBase = TokenUtil.getToken(authorization);
        const infoToken = TokenUtil.decodeTokenJwt(tokenBase);
        if (new Date().getTime() > infoToken.payload.exp) {
            return false;
        }
        return true;
    }
}
