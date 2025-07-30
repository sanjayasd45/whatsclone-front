import { configureStore } from '@reduxjs/toolkit';
import newContactUser from './slices/NewUser.slice.js'
import recetChatSlice from './slices/recentChats.slice.js'
import currentUserSlice from './slices/currentUser.slice.js'
import currentChatSlice from './slices/CurrectChat.slice.js'

export  const store = configureStore({
  reducer: {
    newContact: newContactUser,
    recentChats : recetChatSlice,
    currentUser : currentUserSlice,
    currentChat : currentChatSlice
  },
});
