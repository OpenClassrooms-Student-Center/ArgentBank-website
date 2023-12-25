import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      userName: null,
    },
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user; 
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = {}; 
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUserProfile: (state, action) => {
      state.user.userName = action.payload.userName;
    },
  },
});

export const { setCredentials, logout, updateUserProfile } = authSlice.actions;

export default authSlice.reducer;
