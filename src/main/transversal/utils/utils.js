import { Buffer } from "buffer";
//window.Buffer = buffer.Buffer;

export class Utils {
    static isEmpty(value) {
        if (value === undefined || value === null || value === "") {
            return true;
        }
        if (Array.isArray(value) === true) {
            return value.length === 0;
        }
        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return true;
        }
        return false;
    }

    static anyToJson(payload) {
        try {
            return JSON.parse(payload);
        } catch (_) {
            return payload;
        }
    }
    static decode(s) {
        return Buffer.from(s, 'base64').toString();
    }
    static encode(b) {
        return Buffer.from(b).toString('base64');;
    }

    static Uint8ArrayToString(value) {
        return Buffer.from(value).toString();
    }

    static generateOTP() {
        const digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return Number(OTP);
    }

}