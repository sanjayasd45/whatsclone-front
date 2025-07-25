import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentChat: {
    members: [],
    is_group_chat: false,
    group_name: "",
    group_profile: "",
    latest_message: "",
    messages : [{}],
  }, // Will store the selected user object or userId
};

const currentChatSlice = createSlice({
  name: "currentChat",
  initialState,
  reducers: {
    setChatUser: (state, action) => {
      state.currentChat = action.payload;
    },
    clearChatUser: (state) => {
      state.currentChat = null;
    },
  },
});

export const { setChatUser, clearChatUser } = currentChatSlice.actions;
export default currentChatSlice.reducer;
