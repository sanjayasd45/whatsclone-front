import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

export const signup = async (formData) => {
    try{
        const response = await axios.post(`${API_URL}/user/signup`, formData);
        return response.data;
    }catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
}
export const login = async (formData) => {
    try{
        const response = await axios.post(`${API_URL}/user/login`, formData);
        return response.data;
    }catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
}
export const logout = async() => {
    try{
        const response = await axios.get(`${API_URL}/user/logout`);
        localStorage.clear()
        return response.data;
    }catch (error) {
        console.error('Error during logout:', error);
        throw error;
    }
}