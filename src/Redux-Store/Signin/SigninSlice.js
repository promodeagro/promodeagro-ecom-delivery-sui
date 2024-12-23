import { createSlice } from "@reduxjs/toolkit";
import { signIn, validateOtp } from "./SigninThunk";
import status from "Redux-Store/Constants";

const SigninSlice = createSlice({
  name: "login",
  initialState: {
    loginData: {
      status: null,
    },
    validateOtpRes: {
      status: null,
      data: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending.toString(), (state, action) => {
        return {
          ...state,
          loginData: {
            status: status.IN_PROGRESS,
          },
        };
      })
      .addCase(signIn.fulfilled.toString(), (state, { payload }) => {
        return {
          ...state,
          loginData: {
            status: status.SUCCESS,
            data: payload,
          },
        };
      })
      .addCase(signIn.rejected.toString(), (state, action) => {
        return {
          ...state,
          loginData: {
            status: status.FAILURE,
          },
        };
      })
      .addCase(validateOtp.pending, (state) => {
        state.validateOtpRes.status = status.IN_PROGRESS;
      })
      .addCase(validateOtp.fulfilled, (state, { payload }) => {
        state.validateOtpRes.status = status.SUCCESS;
        state.validateOtpRes.data = payload;
      })
      .addCase(validateOtp.rejected, (state) => {
        state.validateOtpRes.status = status.FAILURE;
      });
  },
});

export default SigninSlice.reducer;
