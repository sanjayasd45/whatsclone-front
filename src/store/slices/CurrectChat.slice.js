// features/currentChat/currentChatSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const profile_pic = "https://res.cloudinary.com/expensetracker45/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1753379224/ChatGPT_Image_Jul_24_2025_11_14_00_PM_dbbhzd.png";

const API_URL = import.meta.env.VITE_API_URL;

// 🔁 Async thunk using createAsyncThunk
export const fetchChatById = createAsyncThunk(
  "currentChat/fetchChatById",
  async (chatId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/getChat`, {chat_id : chatId }); // Use POST and pass chatId in body
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Something went wrong"
      );
    }
  }
);


// Initial State
const initialState = {
  data: {
    members: [],
    is_group_chat: false,
    name: "",
    profile_pic: "",
    messages: [],
    lastSeen : "Yesterday"
  },
  loading: false,
  error: null,
};

// Slice
const currentChatSlice = createSlice({
  name: "currentChat",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChatById.fulfilled, (state, action) => {
        action.payload
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchChatById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearChatUser, addMessage } = currentChatSlice.actions;

export default currentChatSlice.reducer;
