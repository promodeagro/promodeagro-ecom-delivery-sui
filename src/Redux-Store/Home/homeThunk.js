import { createAsyncThunk } from "@reduxjs/toolkit";
import Config from 'Views/Config';

// Function to get access token
const getToken = () => {
    const token = localStorage.getItem("user");
    return token ? JSON.parse(token).accessToken : null;
};

// Thunk to fetch runsheet
export const fetchRunsheet = createAsyncThunk(
  "runsheet/fetch",
  async (_, { rejectWithValue }) => {
    // Retrieve and sanitize the riderId and accessToken
    const riderId = localStorage.getItem("id")?.replace(/['"]+/g, '');  // Remove quotes from riderId
    const accessToken = getToken();  // Use the getToken function for the access token
    
    // Check if riderId or accessToken is missing
    if (!riderId) return rejectWithValue("Rider ID not found");
    if (!accessToken) return rejectWithValue("Token not found");
    
    try {
      // Debugging: Log the Rider ID
      console.log("Rider ID:", riderId); // Ensure it's correctly trimmed
      
      // Perform the fetch request
      const response = await fetch(
        Config.GETRUNSHEETS.replace("{id}", riderId), // Correct URL format
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Include token in the request header
          },
        }
      );
      
      // Check if response is successful
      if (!response.ok) throw new Error("Failed to fetch runsheet");
      
      // Parse and return the response data
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);
