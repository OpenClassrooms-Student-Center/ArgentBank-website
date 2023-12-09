import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: { token: "", isAuthenticated: false, userId: null },
  reducers: {
    setLogIn: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.userId = action.payload.userId; // Assuming the payload includes the userId
    },
    setLogOut: (state) => {
      state.token = "";
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const { setLogIn, setLogOut } = userAuthSlice.actions;
export default userAuthSlice.reducer;
