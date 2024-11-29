import { createAsyncThunk } from "@reduxjs/toolkit";
import Config from "Views/Config";

export const signOut = createAsyncThunk("auth/signOut", async (_, { rejectWithValue }) => {
  try {
    const user = JSON.parse(localStorage.getItem("user")); // Retrieve user object
    const accessToken = user?.accessToken; // Extract access token

    if (!accessToken) {
      throw new Error("Access token not found in user object");
    }

    const response = await fetch(Config.SIGN_OUT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }), // Pass access token in request body
    });

    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData);
    }

    return await response.json(); // Return success response
  } catch (error) {
    return rejectWithValue(error.message || "Something went wrong");
  }
});
