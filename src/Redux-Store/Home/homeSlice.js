import { createSlice } from "@reduxjs/toolkit";
import { fetchRunsheet } from "./homeThunk"

const runsheetSlice = createSlice({
  name: "runsheet",
  initialState: {
    runsheet: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearRunsheet: (state) => {
      state.runsheet = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRunsheet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRunsheet.fulfilled, (state, action) => {
        state.runsheet = action.payload;
        state.loading = false;
      })
      .addCase(fetchRunsheet.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearRunsheet } = runsheetSlice.actions;
export default runsheetSlice.reducer;
