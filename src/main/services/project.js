import axios from 'axios';
import { buildAndThrowNewError, buildHeaders } from '../transversal/auth';
import Constants from "../transversal/constants";

export const getAll = async (query) => {
    try {
        const urlParameters = Object.entries(query).filter(p => p[1] !== undefined && p[1] !== null && p[1] !== "").map(e => e.join('=')).join('&');
        const authHeaders = buildHeaders();
        const res = await axios.get(`${Constants.API.projects.getAll}?${urlParameters}`, {
            headers: {
                ...authHeaders
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        buildAndThrowNewError(error);
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
        buildAndThrowNewError(error);
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
        buildAndThrowNewError(error);
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
        buildAndThrowNewError(error);
    }
}

export const updateById = async (id, payload) => {
    try {
        const authHeaders = buildHeaders();
        const res = await axios.put(`${Constants.API.projects.update.replace(":id", id)}`, payload, {
            headers: {
                ...authHeaders
            },
        });
        return res.data;
    } catch (error) {
        console.error(error);
        buildAndThrowNewError(error);
    }
}
