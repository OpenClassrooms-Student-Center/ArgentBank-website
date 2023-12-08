import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "../reducers/userAuthSlice";
import profileSlice from "../reducers/profileSlice";

const store = configureStore({
  // creation et configuration du store
  reducer: {
    userAuth: userAuthSlice, // slice gérant l'authentification de l'utilisateur
    profile: profileSlice, // slice gérant le profil de l'utilisateur
  },
});

export default store;
