import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./../store";

export const { logUser, logOutUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
