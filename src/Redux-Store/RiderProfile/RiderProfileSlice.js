import { createSlice } from "@reduxjs/toolkit";
import { submitProfile } from "./RiderProfileThunk";
import status from "Redux-Store/Constants";

const riderProfileSlice = createSlice({
    name: "riderProfile",
    initialState: {
        riderProfile: {
        status: null,
      },
    
    submitProfileData: {
        status: null,
    }
    },
    reducers: {
     
    },
   extraReducers:(builder)=> {
    builder

   
    .addCase(submitProfile.pending.toString(), (state, action) => {
        return {
            ...state,
            submitProfileData: {
                status: status.IN_PROGRESS,
            },
        };
    })
    .addCase(submitProfile.fulfilled.toString(), (state, { payload }) => {
        return {
            ...state,
            submitProfileData: {
                status: status.SUCCESS,
                data: payload,
            },
        };
    })
    .addCase(submitProfile.rejected.toString(), (state, action) => {
        return {
            ...state,
            submitProfileData: {
                status: status.FAILURE,
            },
        };
    })
    

   }
})

export default riderProfileSlice.reducer;