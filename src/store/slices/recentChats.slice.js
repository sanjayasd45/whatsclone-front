import { createSlice } from "@reduxjs/toolkit";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import { act } from "react";

// Dummy profile image (can be used as fallback)
const profile_pic =
  "https://res.cloudinary.com/expensetracker45/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1753379224/ChatGPT_Image_Jul_24_2025_11_14_00_PM_dbbhzd.png";

// Initial sample data (optional fallback for dev/testing)
// const data = [
//   {
//     user_id: 1,
//     chat_id: 1,
//     phone_number: "",
//     name: "Agam",
//     lastMessage: "Tb l size .....",
//     lastSeen: "Yesterday",
//     profile_pic: profile_pic,
//   },
//   {
//     user_id: 2,
//     chat_id: 2,
//     phone_number: "",
//     name: "Nikhil Verma",
//     lastMessage: "Tb l size .....",
//     lastSeen: "Yesterday",
//     profile_pic: profile_pic,
//   },
//   {
//     user_id: 3,
//     chat_id: 3,
//     phone_number: "",
//     name: "Sakshi Verma",
//     lastMessage: "Tb l size .....",
//     lastSeen: "Yesterday",
//     profile_pic: profile_pic,
//   },
//   {
//     user_id: 4,
//     chat_id: 4,
//     phone_number: "",
//     name: "Komal Singh",
//     lastMessage: "Tb l size .....",
//     lastSeen: "Yesterday",
//     profile_pic: profile_pic,
//   },
//   {
//     user_id: 5,
//     chat_id: 5,
//     phone_number: "",
//     name: "Ganga ji",
//     lastMessage: "Tb l size .....",
//     lastSeen: "Yesterday",
//     profile_pic: profile_pic,
//   },
// ];

const initialState = {
  data: [], // Replace with [] for live production
  loading: false,
  error: null,
  selectedUser: null,
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
      console.log(action.payload);

      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setChatUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    removeUserFromRecent: (state, action) => {
      state.data = state.data.filter(
        (chat) => chat.chat_id !== action.payload
      );
      state.loading = false;
      state.error = null;
    },
    addChat: (state, action) => {
      if (!Array.isArray(state.data)) {
        state.data = [];
      }
      if (state.data.length === 0) {
        state.data.push(action.payload);
      } else {
        state.data.unshift(action.payload);
      }
    },
    addSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

// ✅ THUNK: Fetch recent chats from backend
export const fetchRecentChats = ({ phone_number }) => async (dispatch) => {
  try {
    dispatch(startLoading());
    console.log(phone_number);

    const response = await axios.post(`${API_URL}/getChats`, { number: phone_number }); // 🔁 Replace with your API endpoint
    console.log(response?.data);

    // dispatch(setChatUser(response.data));
  } catch (error) {
    dispatch(
      setChatUserError(error.response?.data?.message || "Failed to load chats")
    );
  }
};

export const {
  startLoading,
  setChatUser,
  setChatUserError,
  removeUserFromRecent,
  addChat,
  addSelectedUser,
} = recentChatsSlice.actions;

export default recentChatsSlice.reducer;
