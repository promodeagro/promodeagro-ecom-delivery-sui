import { createAsyncThunk } from "@reduxjs/toolkit";
import Config from 'Views/Config';

const getToken = () => {
    const token = localStorage.getItem("user");
    return token ? JSON.parse(token).accessToken : null;
};

export const fetchRunsheet = createAsyncThunk(
  "runsheet/fetch",
  async (_, { rejectWithValue }) => {
    const riderId = localStorage.getItem("id")?.replace(/['"]+/g, '');  
    const accessToken = getToken();  
        if (!riderId) return rejectWithValue("Rider ID not found");
    if (!accessToken) return rejectWithValue("Token not found");
    
    try {
      console.log("Rider ID:", riderId); 
            const url = Config.GETRUNSHEETS.replace("{id}", riderId);
      console.log("Requested URL:", url); 
      const response = await fetch(url, {
        headers: {  
          Authorization: `Bearer ${accessToken}`, 
        },
      });
            if (!response.ok) {
        console.error("Failed response:", response.status, response.statusText); 
        throw new Error("Failed to fetch runsheet");
      }
      const data = await response.json();
      
      console.log("API Response:", data); 
      return data;
    } catch (error) {
      console.error("Fetch Error:", error.message); 
      return rejectWithValue(error.message); 
    }
  }
);

export const acceptRunSheetAPI = createAsyncThunk(
  "runsheet/accept",
  async ({ riderId, runsheetId }, { rejectWithValue }) => {
    const accessToken = getToken();
    console.log("Accepting runsheet...");
    console.log("Rider ID:", riderId);
    console.log("Runsheet ID:", runsheetId);

    if (!riderId) {
      console.error("Rider ID not found");
      return rejectWithValue("Rider ID not found");
    }

    if (!accessToken) {
      console.error("Token not found");
      return rejectWithValue("Token not found");
    }

    try {
      const url = Config.ACCEPTRUNSHEET.replace("{id}", riderId).replace("{runsheetId}", runsheetId);
      console.log("Request URL:", url); 

      const response = await fetch(url, {
        method: "GET",  
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        console.error("Failed response:", response.status, response.statusText);
        throw new Error("Failed to accept runsheet");
      }
      const data = await response.json();
      console.log("API Response:", data); 

      return data;
    } catch (error) {
      console.error("Error accepting runsheet:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRunsheetDetail = createAsyncThunk(
  "runsheet/fetchDetail",
  async ({ riderId, runsheetId }, { rejectWithValue }) => {
    const accessToken = getToken();

    if (!riderId) {
      console.error("Rider ID not found");
      return rejectWithValue("Rider ID not found");
    }
    if (!accessToken) {
      console.error("Token not found");
      return rejectWithValue("Token not found");
    }

    try {
      const url = Config.RUNSHEETDETAIL.replace("{id}", riderId).replace(
        "{runsheetId}",
        runsheetId
      );

      console.log("Constructed URL for Runsheet Detail:", url);

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!response.ok) {
        console.error("API Error Response:", await response.text());
        throw new Error("Failed to fetch runsheet detail");
      }

      const data = await response.json();
      console.log("API Response Data:", data);

      return data;
    } catch (error) {
      console.error("Error in fetchRunsheetDetail:", error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const cancelOrderAPI = createAsyncThunk(
  "order/cancel",
  async ({ id, runsheetId, orderId, reason }, { rejectWithValue }) => {
    console.log("Cancel Order API Payload:", { id, runsheetId, orderId, reason });

    const accessToken = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).accessToken
      : null;

    if (!accessToken) {
      console.error("Access token not found");
      return rejectWithValue("Token not found");
    }

    if (!id || !runsheetId || !orderId) {
      console.error("Missing required parameters:", { id, runsheetId, orderId });
      return rejectWithValue("Missing required parameters");
    }

    try {
      const url = Config.CANCELORDER
        .replace("{id}", id) // Use 'id' in the URL
        .replace("{runsheetId}", runsheetId)
        .replace("{orderId}", orderId);

      console.log("Cancel Order URL:", url);

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({id, runsheetId, orderId, reason }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Response:", errorData);
        throw new Error(errorData.message || "Failed to cancel the order");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error:", error.message);
      return rejectWithValue(error.message);
    }
  }
);
