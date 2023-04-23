import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, User } from '../types';

const initialState: RootState = {
  // @ts-ignore
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      // @ts-ignore
      state.user = action.payload;
    },
    clearUser(state) {
      // @ts-ignore
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
