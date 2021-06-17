import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
  },
  reducers: {
    authFalse: (state) => {
      state.auth = false;
    },
    authTrue: (state) => {
      state.auth = true;
    },
  },
});

export const { authFalse, authTrue } = authSlice.actions;

export default authSlice.reducer;
