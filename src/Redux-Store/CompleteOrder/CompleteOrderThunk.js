import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'Views/Config';

// Helper function to get the rider ID from localStorage
const getRiderId = () => {
  return localStorage.getItem('id')?.replace(/['"]+/g, '');
};

// Helper function to get the token from localStorage
const getToken = () => {
  const token = localStorage.getItem('user');
  return token ? JSON.parse(token).accessToken : null;
};

// Async Thunk to complete an order
export const completeOrder = createAsyncThunk(
  'completeOrder/complete', // action type
  async ({ runsheetId, orderId, photoUrl }, { rejectWithValue }) => {
    const riderId = getRiderId(); // Get the riderId from localStorage
    const token = getToken(); // Get the token from localStorage

    if (!riderId || !token) {
      return rejectWithValue('Rider ID or token is missing');
    }

    try {
      const response = await fetch(
        Config.COMPLETEORDER.replace('{id}', riderId)
          .replace('{runsheetId}', runsheetId)
          .replace('{orderId}', orderId),
        {
          method: 'PUT', // Use PUT or POST depending on the API endpoint
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: photoUrl, // Pass the image URL to the API
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to complete the order');
      }

      const data = await response.json();
      return data; // Will be available in the payload
    } catch (error) {
      return rejectWithValue(error.message); // Return error if the request fails
    }
  }
);
