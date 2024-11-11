import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService, preLoginService } from "Services";

export const signIn = createAsyncThunk("login", async (params) => {
    try {
      let url = config.SIGN_IN;
      const response = await preLoginService.post(url, params);
  
      return {
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      return {
        ...error.response.data,
        statusCode: error.response.status,
      };
    }
  });

  export const validateOtp = createAsyncThunk("otp", async (params) => {
    try {
      let url = config.VALIDATE_OTP;
      const response = await postLoginService.post(url, params);
  
      return {
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      return {
        ...error.response.data,
        statusCode: error.response.status,
      };
    }
  });
  



  