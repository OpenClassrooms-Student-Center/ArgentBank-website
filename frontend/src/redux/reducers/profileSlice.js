import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userData: null,
  },
  reducers: {
    setEditProfile: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setEditProfile } = profileSlice.actions;

export default profileSlice.reducer;
