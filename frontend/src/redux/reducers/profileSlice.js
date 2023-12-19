import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userData: null,
  },
  reducers: {
    setEditProfile: (state, action) => {
      state.userData = action.payload;
      state.userData.firstName = action.payload.firstName;
      state.userData.lastName = action.payload.lastName;
    },
  },
});

export const { setEditProfile } = profileSlice.actions;

export default profileSlice.reducer;
