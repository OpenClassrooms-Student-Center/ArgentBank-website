import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import profileReducer from '../reducers/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});
