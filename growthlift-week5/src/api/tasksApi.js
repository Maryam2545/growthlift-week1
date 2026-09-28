import axios from "axios";

const API_URL = "http://localhost:3000/api/tasks";

export const getTasks = () => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.get(API_URL, config);
};

export const getTask = (id) => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.get(`${API_URL}/${id}`, config);
};

export const createTask = (data) => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.post(API_URL, data, config);
};

export const updateTask = (id, data) => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.put(`${API_URL}/${id}`, data, config);
};

export const deleteTask = (id) => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.delete(`${API_URL}/${id}`, config);
};