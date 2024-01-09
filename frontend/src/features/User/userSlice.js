import { createSlice } from "@reduxjs/toolkit";

const  userSlice = createSlice({
  name: "user",
  // On initialise le state ici
  initialState: { firstname: null, lastname: null, username: null, id: null},
  reducers: {
    setUserInfo: (state, action) => {
      if (action.payload) {
        state.firstname = action.payload.firstName;
        state.lastname = action.payload.lastName;
        state.username = action.payload.userName;
        state.id = action.payload.id;
      }
    },
    resetUserState: (state) => {
        state.firstname = null;
        state.lastname = null;
        state.username = null;
        state.id = null;
      },
  },
});
// on creer une action ici qui est connecté au store et endpoints du baseQuery
export const { setUserInfo, resetUserState } = userSlice.actions;
// On creer un reducer ici qui est connecté au store
export default userSlice.reducer;

// le user ci dessous reprensente le name "user" de la ligne 4 de ce fichier.
export const selectCurrentFirstname = (state) => state.user.firstname;
export const selectCurrentLastname = (state) => state.user.lastname;
export const selectCurrentUsername = (state) => state.user.username;
export const selectCurrentId = (state) => state.user.id;