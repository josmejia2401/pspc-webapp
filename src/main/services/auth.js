import axios from 'axios';
import { buildHeaders, setAccessToken } from '../transversal/auth';
import { CustomError } from '../transversal/error';
import Constants from "../transversal/constants";

export const signIn = async (payload) => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.post(`${Constants.API.auth.signIn}`, payload, {
            headers: {
                ...authHeaders
            },
        });
        const data = res.data;
        setAccessToken(data["token"]);
        return data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            // Request made and server responded
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            throw new CustomError(error.response.data["message"], error.response.data["code"], error.response.status);
        }
        throw error;
    }
}



export const signUp = async (payload) => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.post(`${Constants.API.auth.signUp}`, payload, {
            headers: {
                ...authHeaders
            },
        });
        const data = res.data;
        setAccessToken(data["token"]);
        return data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            // Request made and server responded
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            throw new CustomError(error.response.data["message"], error.response.data["code"], error.response.status);
        }
        throw error;
    }
}