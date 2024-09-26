
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "Redux-Store/Products/ProductThunk";
import status from "Redux-Store/Constants";
import { fetchUsers } from "./UsersThunk";

const UsersSlice = createSlice({
  name: "users",
  initialState: {
    users: {
      status: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending.toString(), (state, action) => {
        return {
          ...state,
          users: {
            status: status.IN_PROGRESS,
          },
        };
      })
      .addCase(fetchUsers.fulfilled.toString(), (state, { payload }) => {
        return {
          ...state,
          users: {
            status: status.SUCCESS,
            data: payload.data,
          },
        };
      })
      .addCase(fetchUsers.rejected.toString(), (state, action) => {
        return {
          ...state,
          users: {
            status: status.FAILURE,
          },
        };
      });
  },
});

export default UsersSlice.reducer;
