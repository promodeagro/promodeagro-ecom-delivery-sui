import { createSlice } from "@reduxjs/toolkit";
import { fetchRunsheet, acceptRunSheetAPI, fetchRunsheetDetail } from "./homeThunk";

const runsheetSlice = createSlice({
  name: "runsheet",
  initialState: {
    runsheet: null,
    runsheetDetail: null,  // Added state for storing runsheet details
    loading: false,
    acceptStatus: null, // For tracking acceptance status
    error: null,
  },
  reducers: {
    clearRunsheet: (state) => {
      state.runsheet = null;
      state.runsheetDetail = null;
      state.loading = false;
      state.acceptStatus = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Runsheet
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

    // Accept Runsheet
    builder
      .addCase(acceptRunSheetAPI.pending, (state) => {
        state.acceptStatus = "pending";
        state.error = null;
      })
      .addCase(acceptRunSheetAPI.fulfilled, (state, action) => {
        state.acceptStatus = "success";
        state.runsheet = action.payload; // Optionally update runsheet data
      })
      .addCase(acceptRunSheetAPI.rejected, (state, action) => {
        state.acceptStatus = "failed";
        state.error = action.payload;
      });

    // Fetch Runsheet Detail
    builder
      .addCase(fetchRunsheetDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRunsheetDetail.fulfilled, (state, action) => {
        state.runsheetDetail = action.payload;
        state.loading = false;
      })
      .addCase(fetchRunsheetDetail.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearRunsheet } = runsheetSlice.actions;
export default runsheetSlice.reducer;
