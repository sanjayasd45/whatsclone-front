import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: null,
};

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            
            
            state.userData = action.payload;
        },
        clearCurrentUser(state) {
            state.user = null;
        },
    },
});

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;