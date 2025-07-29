import { createSlice } from "@reduxjs/toolkit";
const profile_pic = "https://res.cloudinary.com/expensetracker45/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1753379224/ChatGPT_Image_Jul_24_2025_11_14_00_PM_dbbhzd.png"
const data = [
    {
        user_id: 1,
        chat_id: 1,
        phone_number: "",
        name: "Sanjay Kumar",
        lastMessage: "Tb l size .....",
        lastSeen: "Yesterday",
        profile_pic: profile_pic
    },
    {
        user_id: 2,
        chat_id: 2,
        phone_number: "",
        name: "Nikhil Verma",
        lastMessage: "Tb l size .....",
        lastSeen: "Yesterday",
        profile_pic: profile_pic
    },
    {
        user_id: 3,
        chat_id: 3,
        phone_number: "",
        name: "Sakshi Verma",
        lastMessage: "Tb l size .....",
        lastSeen: "Yesterday",
        profile_pic: profile_pic
    },
    {
        user_id: 4,
        chat_id: 4,
        phone_number: "",
        name: "Komal Singh",
        lastMessage: "Tb l size .....",
        lastSeen: "Yesterday",
        profile_pic: profile_pic
    },
    {
        user_id: 5,
        chat_id: 5,
        phone_number: "",
        name: "Ganga ji",
        lastMessage: "Tb l size .....",
        lastSeen: "Yesterday",
        profile_pic: profile_pic
    },
];

const initialState = {
    data: [...data],
    loading: false,
    error: null,
    selectedUser : null
};

const recentChatsSlice = createSlice({
    name: "recentChats",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setChatUser: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        setChatUserError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        removeUserFromRecent: (state, action) => {
            // Remove user by chat_id from recent chats
            state.data = state.data.filter(
                (chat) => chat.chat_id !== action.payload
            );
            state.loading = false;
            state.error = null;
        },
        addChat: (state, action) => {
            state.data.unshift(action.payload);
        },
        addSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
});

export const {
    startLoading,
    setChatUser,
    setChatUserError,
    findUserById,
    removeUserFromRecent,
    addChat,
    addSelectedUser
} = recentChatsSlice.actions;

export default recentChatsSlice.reducer;



