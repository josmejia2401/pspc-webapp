import axios from 'axios';
import { buildHeaders, setAccessToken, cleanAll, buildAndThrowNewError } from '../transversal/auth';
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
        setAccessToken(data["accessToken"]);
        return data;
    } catch (error) {
        console.error(error);
        buildAndThrowNewError(error);
    }
}



export const signOut = async () => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.post(`${Constants.API.auth.signOut}`, {}, {
            headers: {
                ...authHeaders
            },
        });
        const data = res.data;
        cleanAll();
        return data;
    } catch (error) {
        console.error(error);
        buildAndThrowNewError(error);
    }
}