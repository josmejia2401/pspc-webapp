import axios from 'axios';
import { buildHeaders, setAccessToken, cleanAll } from '../transversal/auth';
import { CustomError } from '../transversal/error';
import Constants from "../transversal/constants";

export const getAll = async () => {
    try {
        const authHeaders = buildHeaders();
        console.log("authHeaders", authHeaders);
        const res = await axios.get(`${Constants.API.projects.getAll}`, {
            headers: {
                ...authHeaders
            },
        });
        return res.data;
    } catch (error) {
        console.error("error getAll", JSON.strngify(error.data || {}));

console.error("error getAll", JSON.strngify(error.response || {}));

        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            throw new CustomError(error.response.data["message"], error.response.data["code"], error.response.status);
        }
        throw error;
    }
}

export const getById = async (id) => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.get(`${Constants.API.projects.getById.replace(":id", id)}`, {
            headers: {
                ...authHeaders
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            throw new CustomError(error.response.data["message"], error.response.data["code"], error.response.status);
        }
        throw error;
    }
}

export const create = async (payload) => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.post(`${Constants.API.projects.create}`, payload, {
            headers: {
                ...authHeaders
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            throw new CustomError(error.response.data["message"], error.response.data["code"], error.response.status);
        }
        throw error;
    }
}

export const deleteById = async (id) => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.delete(`${Constants.API.projects.delete.replace(":id", id)}`, {
            headers: {
                ...authHeaders
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            throw new CustomError(error.response.data["message"], error.response.data["code"], error.response.status);
        }
        throw error;
    }
}

export const update = async (id, payload) => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.update(`${Constants.API.projects.update.replace(":id", id)}`, payload, {
            headers: {
                ...authHeaders
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
            throw new CustomError(error.response.data["message"], error.response.data["code"], error.response.status);
        }
        throw error;
    }
}
