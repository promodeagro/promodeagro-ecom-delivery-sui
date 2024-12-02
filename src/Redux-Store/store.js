import { configureStore } from "@reduxjs/toolkit";
import SigninSlice from "./Signin/SigninSlice";
import onboardingReducer from "./Onboarding/onboardingSlice"; 
import runsheetReducer from "./Home/homeSlice";
import signoutReducer from "./Signout/SignoutSlice";
import notificationReducer from './Notification/NotificationSlice';
import completeOrderReducer from './CompleteOrder/CompleteOrderSlice';


import uploadReducer from "./Uploadimage/UploadSlice"

const store = configureStore({
  reducer: {
    signin: SigninSlice,
    onboarding: onboardingReducer, 
    runsheet: runsheetReducer,
    signout: signoutReducer,
    notifications: notificationReducer,
    upload: uploadReducer, // Add the upload reducer here
    completeOrder: completeOrderReducer,



  },
});

export default store;
