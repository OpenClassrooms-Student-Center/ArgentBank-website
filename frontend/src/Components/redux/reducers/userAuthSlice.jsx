import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  // creation d'un slice
  name: "userAuth", // nom du slice
  initialState: { token: "" }, // état initial du slice, contenant une propriété token initialisée à une chaîne vide
  reducers: {
    setLogIn: (state, action) => {
      // reducer qui modifie l'état du slice lorsqu'un utilisateur se connecte
      state.token = action.payload.token; // state (l'état actuel du slice) et action qui contient le payload avec le token d'authentification comme arguments
    },
    setLogOut: (state) => {
      // reducer  pour gérer la déconnexion de l'utilisateur
      state.token = ""; // reinitialise le token
    },
  },
});

export const { setLogIn, setLogOut } = userAuthSlice.actions; // export des actions "setLogIn" et "setLogOut"
export default userAuthSlice.reducer; // export du réducer "userAuthSlice.reducer"
