import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});
const initialState = usersAdapter.getInitialState({
  username: "", // Valeur par défaut pour username
  token: null, // Initialiser le token à null
  userId: null,
  entities: {},
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { userId, username, token } = action.payload;
      usersAdapter.upsertOne(state, { userId, username, token });
      state.token = token;
      state.username = username;
      state.id = userId;
      console.log("userid test :", userId);
    },
    updateUser: usersAdapter.updateOne,
    updateUsername: (state, action) => {
      usersAdapter.updateOne(state, {
        id: action.payload.userId,
        changes: { username: action.payload.newUsername },
      });
    },
  },
});
export const selectToken = (state) => state.users.token;
export const { setUser, updateUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
