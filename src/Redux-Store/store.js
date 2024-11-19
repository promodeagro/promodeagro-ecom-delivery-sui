// store.js
import { configureStore } from "@reduxjs/toolkit";
import SigninSlice from "./Signin/SigninSlice";
import onboardingReducer from "./Onboarding/onboardingSlice"; // Import the onboarding slice
import runsheetReducer from "./Home/homeSlice"


const store = configureStore({
  reducer: {
    signin: SigninSlice,
    onboarding: onboardingReducer, // Add onboarding reducer here
    runsheet: runsheetReducer,

  },
});

export default store;
