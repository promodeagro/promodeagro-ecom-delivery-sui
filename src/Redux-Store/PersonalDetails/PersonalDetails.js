// src/redux/slices/personalDetailsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the thunk for updating personal details
export const updatePersonalDetails = createAsyncThunk(
  'personalDetails/update',
  async ({ id, fullName, dob, email, address, reference }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        'https://hru1nl9r81.execute-api.ap-south-1.amazonaws.com/rider/personal-details',
        {
          id,
          fullName,
          dob,
          email,
          address,
          reference,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmYxOGI4LWI0MGQtNGZlNC05MjFhLTY1NWE1YzY0NjYxZiIsIm51bWJlciI6Ijg4ODY4MzQyMTkiLCJ1c2VyVHlwZSI6InJpZGVyIiwiaWF0IjoxNzMwNTAxNjM5LCJleHAiOjE3MzA1ODgwMzksImlzcyI6Imh0dHBzOi8vd3d3LnJpZGVyLnByb21vZGVhZ3JvLmNvbS8iLCJzdWIiOiJhZDZmMThiOC1iNDBkLTRmZTQtOTIxYS02NTVhNWM2NDY2MWYifQ.9Jxx-F3Qq9yztLym-dtJ7I4Bf2Gqbp0EK7INOxxxKw8`
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Error updating personal details');
    }
  }
);

// Create the slice
const personalDetailsSlice = createSlice({
  name: 'personalDetails',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePersonalDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePersonalDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updatePersonalDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default personalDetailsSlice.reducer;
