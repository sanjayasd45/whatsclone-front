import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export const getUsers = async() => {
    try {
        const response = await axios.post(`${API_URL}/user/getUsers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
export const getUser = async({phone_number}) => {
    try {
        const response = await axios.post(`${API_URL}/getUser`, {phone_number});
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}