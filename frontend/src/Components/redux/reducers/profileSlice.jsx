import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // stocke les valeurs initiales des propriétés du profil utilisateur
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
};

const profileSlice = createSlice({
  // "profileSlice" est créé en utilisant "createSlice"
  name: "profile", // nom du Slice
  initialState, // definition de l'etat initiale
  reducers: {
    //définit les réducers pour modifier l'état du slice.
    setGetProfile: (state, action) => {
      // est défini pour mettre à jour l'état du slice avec les données du profil utilisateur.
      // Il prend deux arguments : state (l'état actuel du slice) et action (contenant les données pour la mise à jour).
      state.email = action.payload.data.body.email;
      // assure que l'email contenu dans action.payload.data.body.email est assigné à la propriété email de l'état du profil de l'utilisateur
      // mettant à jour cette information dans le store Redux.
      state.firstName = action.payload.data.body.firstName;
      state.lastName = action.payload.data.body.lastName;
      state.userName = action.payload.data.body.userName;
    },
    setEditProfile: (state, action) => {
      // est défini pour mettre à jour le nom d'utilisateur (userName) du profil.
      // Il prend également state et action en arguments et met à jour la propriété userName avec la valeur contenue dans action.payload
      state.userName = action.payload;
    },
    resetProfile: () => {
      // est défini pour réinitialiser l'état du slice à son état initial (vide) en renvoyant simplement initialState.
      return initialState;
    },
  },
});

export const { setGetProfile, setEditProfile, resetProfile } =
  profileSlice.actions; // les actions définies dans le slice sont exportées pour être utilisées dans d'autres parties de l'application
export default profileSlice.reducer; // exporté pour être combiné avec d'autres réducteurs dans le store Redux global
