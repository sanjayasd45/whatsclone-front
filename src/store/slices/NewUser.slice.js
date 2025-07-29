import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newUser: {
    name: "",
    phone_number: "",
    profile_pic: "",
    user_id: "",
    chat_id: null,
    last_msg : "",
    last_seen : null
  },
};

const chatUserSlice = createSlice({
  name: "chatUser",
  initialState,
  reducers: {
    setNewUser: (state, action) => {
      console.log(action.payload);
      state.newUser = action.payload;
    },
    clearNewUser: (state) => {
      state.newUser = null;
    },
    updateChatId: (state, action) => {
      if (state.newUser) {
        state.newUser.chat_id = action.payload;
      }
    },
  },
});

export const { setNewUser, clearNewUser, updateChatId  } = chatUserSlice.actions;
export default chatUserSlice.reducer;

// const data  = {
//   name: "Sanjay Kumar",
//   phone_number: "6394645212",
//   profile_pic: "default_profile.png",
//   user_id: "68822f78762ec7fb02ba45f3",
//   chat_id : null,
// };