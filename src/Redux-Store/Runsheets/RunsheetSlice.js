import { createSlice } from "@reduxjs/toolkit";

import status from "Redux-Store/Constants";
import { fetchRunsheets } from "Redux-Store/Runsheets/RunsheetThunk";

const RunsheetsSlice = createSlice({
  name: "runsheets",
  initialState: {
    runsheetsData: {
      status: null,
    },
    // it shoudl chaneg after getting apis
    // order_details: {
    //   status: null,
    // },
    // order_viewattachments: {
    //   status: null,
    // },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRunsheets.pending.toString(), (state, action) => {
        return {
          ...state,
          runsheetsData: {
            status: status.IN_PROGRESS,
          },
        };
      })
      .addCase(fetchRunsheets.fulfilled.toString(), (state, { payload }) => {
        return {
          ...state,
          runsheetsData: {
            status: status.SUCCESS,
            data: payload,
          },
        };
      })
      .addCase(fetchRunsheets.rejected.toString(), (state, action) => {
        return {
          ...state,
          runsheetsData: {
            status: status.FAILURE,
          },
        };

      });
  },
});

export default RunsheetsSlice.reducer;