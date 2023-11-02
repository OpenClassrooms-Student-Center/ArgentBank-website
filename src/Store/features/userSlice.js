import { createSlice } from "@reduxjs/toolkit"; 


//store
const initialState = {
    token: null,
    firstName: null,
    lastName: null,
    username:null,
    email: null,
};

//le slice contient 3 reducers
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, { payload }) => {
            //Destructive assignment from action
            state.token = payload.token;
            state.email = payload.email;
            state.username = payload.userName;
        },
        userLogout: (state) => {
            state.token = null;
            state.firstName = null;
            state.lastName = null;
            state.username = null;
            state.email = null;
        },
        mUserName: (state, { payload }) => {
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.username = payload.userName;
        },
    },
});
export const { userLogin, userLogout, mUserName } = userSlice.actions;
export default userSlice.reducer; 