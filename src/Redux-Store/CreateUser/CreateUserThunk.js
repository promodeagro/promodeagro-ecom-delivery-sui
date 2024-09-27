import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginService } from "Services";

// Fetch products
export const CreateUser = createAsyncThunk("createUser", async (params, { rejectWithValue }) => {
  try {
    let url = 'https://09ubwkjphb.execute-api.us-east-1.amazonaws.com/createUserAndAddress';
    const response = await postLoginService.post(url, params);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});