import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";

export const fetchRunsheets = createAsyncThunk(
  "runsheets",
  async (params) => {
    try {
      let url = 'https://hru1nl9r81.execute-api.ap-south-1.amazonaws.com/rider/cda80d22-42e7-426c-8b8f-28cc5bcef85b/runsheet';
      const response = await postLoginService.get(url);
         console.log(response,"Runsheets");
        return response.data
   
    //   return orderslist;
    } catch (error) {
      return error
      // return orderslist;
    }
  }
);