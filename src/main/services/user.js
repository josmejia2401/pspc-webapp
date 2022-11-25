import { buildHeaders, setUserInfo } from '../transversal/auth';
import { CustomError } from '../transversal/error';
const axios = require('axios');

export const getUserInfo = async () => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.get('http://httpbin.org/post/iddddddddddddddddddddddd', {
            headers: {
                ...authHeaders
            },
        });
        const data = res.data;
        console.log(data);
        //Se guarda en cache
        setUserInfo(data);
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