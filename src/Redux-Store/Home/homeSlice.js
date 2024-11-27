import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRunsheet,
  acceptRunSheetAPI,
  fetchRunsheetDetail,
  cancelOrderAPI,
} from "./homeThunk";

const runsheetSlice = createSlice({
  name: "runsheet",
  initialState: {
    runsheet: {
      status: null,
      data: [],
    },
    runsheetDetail: {
      status: null,
      data: [],
    },
    acceptStatus: {
      status: null,
    },
    cancelStatus: {
      status: null,
    },
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Runsheet
    builder
      .addCase(fetchRunsheet.pending, (state) => {
        state.runsheet.status = "loading";
        state.error = null;
      })
      .addCase(fetchRunsheet.fulfilled, (state, action) => {
        state.runsheet.status = "success";
        state.runsheet.data = action.payload; // Update only runsheet
      })
      .addCase(fetchRunsheet.rejected, (state, action) => {
        state.runsheet.status = "failed";
        state.error = action.payload;
      });

    // Accept Runsheet
    builder
      .addCase(acceptRunSheetAPI.pending, (state) => {
        state.acceptStatus.status = "pending";
        state.error = null;
      })
      .addCase(acceptRunSheetAPI.fulfilled, (state) => {
        state.acceptStatus.status = "success"; // Update only accept status
      })
      .addCase(acceptRunSheetAPI.rejected, (state, action) => {
        state.acceptStatus.status = "failed";
        state.error = action.payload;
      });

    // Fetch Runsheet Detail
    builder
      .addCase(fetchRunsheetDetail.pending, (state) => {
        state.runsheetDetail.status = "loading";
        state.error = null;
      })
      .addCase(fetchRunsheetDetail.fulfilled, (state, action) => {
        state.runsheetDetail.status = "success";
        state.runsheetDetail.data = action.payload; // Update only runsheetDetail
      })
      .addCase(fetchRunsheetDetail.rejected, (state, action) => {
        state.runsheetDetail.status = "failed";
        state.error = action.payload;
      });

    // Cancel Order
    builder
      .addCase(cancelOrderAPI.pending, (state) => {
        state.cancelStatus.status = "pending";
        state.error = null;
      })
      .addCase(cancelOrderAPI.fulfilled, (state) => {
        state.cancelStatus.status = "success"; // Update only cancel status
      })
      .addCase(cancelOrderAPI.rejected, (state, action) => {
        state.cancelStatus.status = "failed";
        state.error = action.payload;
      });
  },
});

export default runsheetSlice.reducer;
