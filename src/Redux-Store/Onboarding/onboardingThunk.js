
import { createAsyncThunk } from "@reduxjs/toolkit";

import { updateLoading, setError, setUploadUrl } from './onboardingSlice';

import config from 'Views/Config';

export const submitOnboardingData = () => async (dispatch, getState) => {
  dispatch(updateLoading(true));

  const { personalDetails, bankDetails, documents } = getState().onboarding;
  const payload = {
    personalDetails,
    bankDetails,
    documents,
  };

  try {
    const response = await fetch(config.ONBOARDING_SUBMIT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
      dispatch(setError(data.message || "Failed to submit onboarding details"));
    }
  } catch (error) {
    dispatch(setError(error.message || "An error occurred during submission"));
  } finally {
    dispatch(updateLoading(false));
  }
};

export const fetchUploadUrl = createAsyncThunk(
  "image/upload",
  async (file, { rejectWithValue }) => {
    try {
      // Step 1: Get the upload URL from the server
      const fileName = encodeURIComponent(file.name);
      const response = await fetch(
        `${config.GETURL}?fileName=${fileName}`
      );
      const { uploadUrl } = await response.json();
      const finalUrl = uploadUrl.split("?")[0];

      // Step 2: Upload the file to the S3 bucket
      const uploadResponse = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
      });

      if (uploadResponse.ok) {
        // If the upload was successful, return the final URL
        console.log(finalUrl)
        return finalUrl;
      } else {
        // If the upload failed, reject with an error message
        return rejectWithValue("Failed to upload the file.");
      }
    } catch (error) {
      // Handle any other errors
      return rejectWithValue(error.message);
    }
  }
);

