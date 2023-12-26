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
      rememberMe: false,

    },
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user; 
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.rememberMe = action.payload.rememberMe; 

    },
    logout: (state) => {
      state.user = {}; 
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUserProfile: (state, action) => {
      state.user.userName = action.payload.userName;
    },
    checkRememberMe: (state) => {
      const token = localStorage.getItem('token');
      if (token) {
        state.token = token;
        state.isAuthenticated = true;
      }
    },
  },
});

export const { setCredentials, logout, updateUserProfile, checkRememberMe } = authSlice.actions;

export default authSlice.reducer;
