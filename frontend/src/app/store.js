import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import  authReducer  from '../features/auth/authSlice';
import  userReducer  from '../features/User/userSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});