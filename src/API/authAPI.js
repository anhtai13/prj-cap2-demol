import axios from "axios"

const API_URL = 'http://localhost:3131';

export const loginAPI = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/login`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const logoutAPI = async (key) => {
    try {
        const response = await axios.post(`${API_URL}/logout`, key);
        return response.data;
    } catch (error) {
        throw error;
    }
}