import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "./SignoutThunk";

const initialState = {
  user: null, // Store user data if needed
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const signoutSlice = createSlice({
  name: "signout",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signOut.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null; // Clear user data on successful sign-out
      })
      .addCase(signOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Set error message from API
      });
  },
});

export const { setUser, clearUser } = signoutSlice.actions;

export default signoutSlice.reducer;
