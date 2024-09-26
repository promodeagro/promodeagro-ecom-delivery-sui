import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PREFIX_APP_PATH, PREFIX_AUTH_PATH } from "./../Config/Config";



// const Dashboards = lazy(() => import("./Postlogin/Dashboard"));



const Home = lazy(() => import("./Postlogin/Home"));
const AmountSummary = lazy(() => import("./Postlogin/AmountSummary"));
const ProfileDetails = lazy(() => import("./Postlogin/ProfileDetails"));
const CustomerDetails = lazy(() => import("./Postlogin/CustomerDetails"));
const Runsheet = lazy(() => import("./Postlogin/Home/Runsheet"));
const CreateNewPassword = lazy(() => import("./PreLogin/CreateNewPassword"));
const Notifications = lazy(() => import("./Postlogin/Notifications/index"));
const VerifiedOrder = lazy(() => import("./Postlogin/CustomerDetails/VerifiedOrder"));
const OtpVerification = lazy(() => import("./PreLogin/OtpVerification"));
const Undelivered = lazy(() => import("./Postlogin/Home/Runsheet/Undelivered/Undelivered"));
const CapturedVerified = lazy(() => import("./Postlogin/CustomerDetails/CapturedVerified"));
const Payment = lazy(() => import("./Postlogin/CustomerDetails/CapturedVerified/Payment"));
const Delivered = lazy(() => import("./Postlogin/Home/Runsheet/Delivered"));


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
            path={`${PREFIX_APP_PATH}/home/runsheet/undelivered`}
            element={<Undelivered />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/home/runsheet/delivered`}
            element={<Delivered />}
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
            path={`${PREFIX_APP_PATH}/customer-details/verify-order`}
            element={<VerifiedOrder />}
          />

          <Route
            exact
            path={`${PREFIX_APP_PATH}/customer-details/captured-verified`}
            element={<CapturedVerified />}
          />

          <Route
            exact
            path={`${PREFIX_APP_PATH}/customer-details/captured-verified/payment`}
            element={<Payment />}
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
            path={`${PREFIX_AUTH_PATH}/otp-varification`}
            element={<OtpVerification />}
          />
          <Route
            exact
            path="/app/inventory"
            element={<Navigate to="/app/inventory/raw-materials" />}
          />
          <Route exact path="/" element={<Navigate to="/auth/signin" />} />

          <Route path="*" element={<PathNotFOund />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Views;
