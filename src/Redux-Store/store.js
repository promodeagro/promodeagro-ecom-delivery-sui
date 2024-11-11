import { configureStore } from "@reduxjs/toolkit";
import SigninSlice from "./Signin/SigninSlice";
const store = configureStore({
  reducer: {
   signin: SigninSlice,
  },
});

export default store;
