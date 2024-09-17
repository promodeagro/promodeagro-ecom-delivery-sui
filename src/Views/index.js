import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PREFIX_APP_PATH, PREFIX_AUTH_PATH } from "./../Config/Config";
import Dashboard from "./Postlogin/Dashboard";
import Home from "./Postlogin/Home";
import AmountSummary from "./Postlogin/AmountSummary";
import ProfileDetails from "./Postlogin/ProfileDetails";
import CustomerDetails from "./Postlogin/CustomerDetails";
import Runsheet from "./Postlogin/Home/Runsheet";
import CreateNewPassword from "./PreLogin/CreateNewPassword";
import  Notifications  from "./Postlogin/Notifications/index";

// const Dashboards = lazy(() => import("./Postlogin/Dashboard"));

const PathNotFOund = lazy(() => import("./PathNotFound"));
const Signin = lazy(() => import("./PreLogin/Signin"));
const Signup = lazy(() => import("./PreLogin/Signup"));
const ForgotPassword = lazy(() => import("./PreLogin/ForgotPassword"));
const Views = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            exact
            path={`${PREFIX_APP_PATH}/dashboard`}
            element={<Dashboard />}
          />
         
         <Route
            exact
            path={`${PREFIX_APP_PATH}/home`}
            element={<Home />}
          />
          
           <Route
            exact
            path={`${PREFIX_APP_PATH}/home/runsheet`}
            element={<Runsheet />}
          />

          <Route
            exact
            path={`${PREFIX_APP_PATH}/amount-summary`}
            element={<AmountSummary />}
          />   
           <Route
            exact
            path={`${PREFIX_APP_PATH}/profile-details`}
            element={<ProfileDetails />}
          />  
          <Route
            exact
            path={`${PREFIX_APP_PATH}/customer-details`}
            element={<CustomerDetails />}
          />

<Route
            exact
            path={`${PREFIX_APP_PATH}/notifications`}
            element={<Notifications />}
          />
         

          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/signin`}
            element={<Signin />}
          />   <Route
            exact
            path={`${PREFIX_AUTH_PATH}/create-password`}
            element={<CreateNewPassword />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/signup`}
            element={<Signup />}
          />

          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/forgot-password`}
            element={<ForgotPassword />}
          />
          <Route
            exact
            path="/app/inventory"
            element={<Navigate to="/app/inventory/raw-materials" />}
          />
          <Route exact path="/" element={<Navigate to="/auth/signin"/>} />

          <Route path="*" element={<PathNotFOund />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Views;
