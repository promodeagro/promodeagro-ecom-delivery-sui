import { configureStore } from "@reduxjs/toolkit";
import SigninSlice from "./Signin/SigninSlice";
import onboardingReducer from "./Onboarding/onboardingSlice"; 
import runsheetReducer from "./Home/homeSlice";
import signoutReducer from "./Signout/SignoutSlice"


const store = configureStore({
  reducer: {
    signin: SigninSlice,
    onboarding: onboardingReducer, 
    runsheet: runsheetReducer,
    signout: signoutReducer,

  },
});

export default store;
