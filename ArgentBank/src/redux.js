import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    token: "",
    userinfo: [],
  },
  reducers: {
    logUser: (state, action) => {
      state.isLogged = true;
      state.token = action.payload.token;
      state.userinfo = action.payload.userinfo;
    },
    logOutUser: (state) => {
      state.isLogged = false;
      state.token = "";
      state.userinfo = [];
    },
  },
});

export const { logUser, logOutUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
