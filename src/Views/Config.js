const BASE_URL = "http://localhost:3000/dev";

const Config = {
  BASE_URL,
  SIGN_IN: `${BASE_URL}/auth/signin`,
  SIGN_OUT: `${BASE_URL}/auth/signout`,
  VALIDATE_OTP: `${BASE_URL}/auth/validate-otp`,
  ONBOARDING_SUBMIT: `${BASE_URL}/register`,
  GETURL: `${BASE_URL}/rider/uploadUrl`,
  GETRUNSHEETS: `${BASE_URL}/rider/{id}/runsheet`,
  ACCEPTRUNSHEET: `${BASE_URL}/rider/{id}/runsheet/{runsheetId}/accept`,
  RUNSHEETDETAIL: `${BASE_URL}/rider/{id}/runsheet/{runsheetId}`,
  CANCELORDER: `${BASE_URL}/rider/{id}/runsheet/{runsheetId}/order/{orderId}/cancel`,
  RECEIVENOTIFICATION: `${BASE_URL}/rider/{id}/notifications`,
  COMPLETEORDER: `${BASE_URL}/rider/{id}/runsheet/{runsheetId}/order/{orderId}/complete`,
};

export default Config;
