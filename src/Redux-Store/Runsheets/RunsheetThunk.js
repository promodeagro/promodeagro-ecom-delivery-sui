import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";

export const fetchRunsheets = createAsyncThunk(
  "runsheets",
  async (params) => {
    try {
      let url = config.FETCH_RUNSHEETS;
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