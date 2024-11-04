import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the base URL for the API
const BASE_URL = 'https://hru1nl9r81.execute-api.ap-south-1.amazonaws.com/rider/bank-details';

// Async thunk for updating bank details
export const updateBankDetails = createAsyncThunk(
  'bankDetails/updateBankDetails',
  async ({ id, bankName, acc, ifsc }, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyMWE0MDNiLWI0OTItNDMxMC1iMzY5LWNhODliMDYyOWFmMyIsIm51bWJlciI6IjkxNzc4MDQwNTciLCJ1c2VyVHlwZSI6InJpZGVyIiwiaWF0IjoxNzMwMjk2NzkyLCJleHAiOjE3MzAzODMxOTIsImlzcyI6Imh0dHBzOi8vd3d3LnJpZGVyLnByb21vZGVhZ3JvLmNvbS8iLCJzdWIiOiIyMjFhNDAzYi1iNDkyLTQzMTAtYjM2OS1jYTg5YjA2MjlhZjMifQ.MzZkBiIDscDxNvwnlk0QZgOtfBotAggY_wNps6bhJv8`
        },
        body: JSON.stringify({ id, bankName, acc, ifsc }),
      });

      // Check if response is OK
      if (!response.ok) {
        throw new Error('Failed to update bank details');
      }

      // Parse JSON response
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for managing bank details state
const bankDetailsSlice = createSlice({
  name: 'bankDetails',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(updateBankDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBankDetails.fulfilled, (state, action) => {
         console.log("Fulfilled action payload:", action.payload);
        state.loading = false;
        state.data = action.payload // Adjust based on the actual response structure

      })
      .addCase(updateBankDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bankDetailsSlice.reducer;
