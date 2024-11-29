import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PREFIX_APP_PATH, PREFIX_AUTH_PATH } from "./../Config/Config";
import Register from "./PreLogin/Onboarding/Register";
import ApplicationStatus from "./PreLogin/Onboarding/ApplicationStatus";
import PersonalDetails from "./PreLogin/Onboarding/PersonalDetails";
import BankDetails from "./PreLogin/Onboarding/BankDetails";
import Documents from "./PreLogin/Onboarding/Documents";
import ReviewAndSubmit from "./PreLogin/Onboarding/ReviewAndSubmit";

const Home = lazy(() => import("./Postlogin/Home"));
const AmountSummary = lazy(() => import("./Postlogin/AmountSummary"));
const CustomerDetails = lazy(() =>
  import("./Postlogin/Home/Pending/CustomerDetails")
);
const Pending = lazy(() => import("./Postlogin/Home/Pending"));
const ProfileDetail = lazy(() => import("./Postlogin/ProfileDetail"))
const Notifications = lazy(() => import("./Postlogin/Notifications/index"));
const Captureorder = lazy(() =>
  import("./Postlogin/Home/Pending/CustomerDetails/Captureorder")
);
const OtpVerification = lazy(() => import("./PreLogin/OtpVerification"));
const Undelivered = lazy(() =>
  import("./Postlogin/Home/Undelivered")
);
const CapturedVerify = lazy(() =>
  import("./Postlogin/Home/Pending/CustomerDetails/Captureorder/CaptureVerify")
);
const Payment = lazy(() =>
  import(
    "./Postlogin/Home/Pending/CustomerDetails/Captureorder/CaptureVerify/Payment"
  )
);
const Delivered = lazy(() => import("./Postlogin/Home/Delivered"));
const PathNotFOund = lazy(() => import("./PathNotFound"));
const Signin = lazy(() => import("./PreLogin/Signin"));
const Views = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path={`${PREFIX_APP_PATH}/home`} element={<Home />} />
          <Route path="/app/home/runsheet/:runsheetId" element={<Pending />} />
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
            path={`${PREFIX_APP_PATH}/home/profileDetail`}
            element={<ProfileDetail />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/amount-summary`}
            element={<AmountSummary />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/home/runsheet/:runsheetId/order/:orderId/customer-details`}
            element={<CustomerDetails />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/home/runsheet/:runsheetId/order/:orderId/customer-details/verify-order`}
            element={<Captureorder />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/home/runsheet/:runsheetId/customer-details/order/:orderId/captured-verify`}
            element={<CapturedVerify />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/home/runsheet/:runsheetId/customer-details/order/:orderId/captured-verified/payment`}
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
          />
                    <Route
            exact
            path={`${PREFIX_AUTH_PATH}/register`}
            element={<Register />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/register/personal-details`}
            element={<PersonalDetails />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/register/bank-details`}
            element={<BankDetails />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/register/documents`}
            element={<Documents />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/register/review-and-submit`}
            element={<ReviewAndSubmit />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/register/application-status`}
            element={<ApplicationStatus />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/otp-varification/:number`} // Add a colon before 'number'
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
