import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL; 

const initialState = {
  data: {
    members: [],
    is_group_chat: false,
    group_name: "",
    group_profile: "",
    latest_message: "",
    messages: [],
  },
  loading: false,
  error: null,
};

const currentChatSlice = createSlice({
  name: "currentChat",
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
    clearChatUser: (state) => {
      state.data = {
        members: [],
        is_group_chat: false,
        group_name: "",
        group_profile: "",
        latest_message: "",
        messages: [],
      };
      state.loading = false;
      state.error = null;
    },
    addMessage: (state, action) => {
      state.data.messages.push(action.payload);
    },
  },
});

// Thunk for fetching chat by ID
export const fetchChatById = (chatId) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const response = await axios.get(`${API_URL}/getChat`,{chatId}); // update with your actual backend route
    console.log(response.data);
    
    // dispatch(setChatUser(response.data));
  } catch (error) {
    dispatch(
      setChatUserError(error.response?.data?.message || "Something went wrong")
    );
  }
};

export const {
  startLoading,
  setChatUser,
  setChatUserError,
  clearChatUser,
  addMessage,
} = currentChatSlice.actions;

export default currentChatSlice.reducer;
