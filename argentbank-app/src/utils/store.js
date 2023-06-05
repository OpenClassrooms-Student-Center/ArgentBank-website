import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/login/user';

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
