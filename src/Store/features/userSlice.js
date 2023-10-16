import { createSlice } from "@reduxjs/toolkit";


//store
const initialState = {
    token: null,
    firstName: null,
    lastName: null,
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
        },
        userLogout: (state) => {
            state.token = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
        },
        userName: (state, { payload }) => {
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
        },
    },
});
export const { userLogin, userLogout, userName } = userSlice.actions;
export default userSlice.reducer;