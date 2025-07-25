import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newContactUser from './slices/NewUser.slice'

export const store = configureStore({
  reducer: {
    newContact: newContactUser,
  },
});
