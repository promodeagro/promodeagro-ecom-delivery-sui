import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'Views/Config';

// Function to get the riderId from localStorage
const getRiderId = () => {
  return localStorage.getItem('id')?.replace(/['"]+/g, '');
};

// Function to retrieve the access token from localStorage
const getToken = () => {
  const token = localStorage.getItem('user');
  return token ? JSON.parse(token).accessToken : null;
};

// Thunk for fetching notifications
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { rejectWithValue }) => {
    const riderId = getRiderId();
    const token = getToken();

    if (!riderId || !token) {
      console.error('Missing rider ID or access token');
      return rejectWithValue('Missing rider ID or access token');
    }

    // Construct the API URL
    const url = Config.RECEIVENOTIFICATION.replace('{id}', riderId);

    try {
      console.log(`Fetching notifications from URL: ${url}`);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(`API Error (URL: ${url}):`, data);
        return rejectWithValue(data.message || 'Failed to fetch notifications');
      }

      console.log(`API Response (URL: ${url}):`, data);
      return data; // Assuming API returns an array of notifications
    } catch (error) {
      console.error(`Network Error (URL: ${url}):`, error);
      return rejectWithValue(error.message || 'An error occurred while fetching notifications');
    }
  }
);
