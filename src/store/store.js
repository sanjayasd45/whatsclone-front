import { configureStore } from '@reduxjs/toolkit';
import newContactUser from './slices/NewUser.slice.js'
import recetChatSlice from './slices/recentChats.slice.js'

export  const store = configureStore({
  reducer: {
    newContact: newContactUser,
    recentChats : recetChatSlice
  },
});
