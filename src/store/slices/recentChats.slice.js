import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
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
            state.data.push(action.payload);
        },
    },
});

export const {
  startLoading,
  setChatUser,
  setChatUserError,
  clearChatUser
} = recentChatsSlice.actions;

export default recentChatsSlice.reducer;
