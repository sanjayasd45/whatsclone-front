import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const chatsData = async(id) => {
    try{
        const response = await axios.post(`${API_URL}/chats`, id)
        return response.data;
    }catch(err){
        console.error("Error fetching chats data:", err);
    }
}
export const addChat = async({members}) => {
    try{
        const response = await axios.post(`${API_URL}/addChat`, {members})
        return response.data;
    }catch(err){
        console.error("Error fetching chats data:", err);
    }
}
export const recentChatsData = async ({number}) => {
    try{
        console.log(number);
        const response = await axios.post(`${API_URL}/getChats`, {number})
        console.log(response);
        
        return response.data;
    }catch(err){
        console.error("Error fetching chats data:", err);
    }
}