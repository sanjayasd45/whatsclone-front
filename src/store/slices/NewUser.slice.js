import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChatUser: null, // Will store the selected user object or userId
};

const chatUserSlice = createSlice({
  name: "chatUser",
  initialState,
  reducers: {
    setChatUser: (state, action) => {
      state.currentChatUser = action.payload;
    },
    clearChatUser: (state) => {
      state.currentChatUser = null;
    },
  },
});

export const { setChatUser, clearChatUser } = chatUserSlice.actions;
export default chatUserSlice.reducer;
