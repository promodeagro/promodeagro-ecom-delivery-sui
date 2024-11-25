import { createSlice } from "@reduxjs/toolkit";
import { fetchRunsheet, acceptRunSheetAPI, fetchRunsheetDetail, cancelOrderAPI } from "./homeThunk";

const runsheetSlice = createSlice({
  name: "runsheet",
  initialState: {
    runsheet: null,
    runsheetDetail: null,  
    loading: false,
    acceptStatus: null, 
    cancelStatus: null, // New state for cancel order
    error: null,
  },
  reducers: {
    clearRunsheet: (state) => {
      state.runsheet = null;
      state.runsheetDetail = null;
      state.loading = false;
      state.acceptStatus = null;
      state.cancelStatus = null;

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
      builder
      .addCase(cancelOrderAPI.pending, (state) => {
        state.cancelStatus = "pending";
        state.error = null;
      })
      .addCase(cancelOrderAPI.fulfilled, (state, action) => {
        state.cancelStatus = "success";
      })
      .addCase(cancelOrderAPI.rejected, (state, action) => {
        state.cancelStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearRunsheet } = runsheetSlice.actions;

export default runsheetSlice.reducer;
