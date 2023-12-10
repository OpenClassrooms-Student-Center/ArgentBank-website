// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {token: null},
    reducers: {
        setCredentials: (state, action) => {
            const {token} = action.payload;
            // ajout de plusieurs state pour plusieurs element dans user ?
            state.token = token;
        },
        setNewToken: (state, action) => {
            if(action.payload){
                state.token = action.payload.token;
            };
        },
        logOut: (state, action) => {
            state.token = null;
        }
    }
});

export const {setCredentials, logOut, setNewToken} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrendToken = state => state.auth.token;