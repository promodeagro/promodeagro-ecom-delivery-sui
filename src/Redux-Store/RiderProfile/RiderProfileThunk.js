import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginService } from "Services";
import Config from "Views/Config";



  
  export const submitProfile = createAsyncThunk("submitProfile", async (params) => {
    try {
      let url = `/rider/submit/7bb96626-7ab5-4a67-869c-8eb85eb74961`;
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


