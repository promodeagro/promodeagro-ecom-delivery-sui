// Redux-Store/CompleteOrder/CompleteOrderSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { completeOrder } from './CompleteOrderThunk';

// Initial state
const initialState = {
  loading: false,
  success: false,
  error: null,
  completedOrder: null,
};

// Create slice
const completeOrderSlice = createSlice({
  name: 'completeOrder',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(completeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(completeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.completedOrder = action.payload;
      })
      .addCase(completeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

// Export the reducer (to be added to the store)
export default completeOrderSlice.reducer;
