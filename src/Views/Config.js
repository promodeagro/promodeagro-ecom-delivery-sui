const BASE_URL = "https://hru1nl9r81.execute-api.ap-south-1.amazonaws.com"

const Config = {
  BASE_URL,
   SIGN_IN:`${BASE_URL}/auth/signin`,
   SIGN_OUT:`${BASE_URL}/auth/signout`,
   VALIDATE_OTP:`${BASE_URL}/auth/validate-otp`,
   ONBOARDING_SUBMIT:`${BASE_URL}/register`,
   GETURL:`${BASE_URL}/rider/uploadUrl`,
   GETRUNSHEETS:`${BASE_URL}/rider/{id}/runsheet`,
   ACCEPTRUNSHEET:`${BASE_URL}/rider/{id}/runsheet/{runsheetId}/accept`,
   RUNSHEETDETAIL:`${BASE_URL}/rider/{id}/runsheet/{runsheetId}`,
  CANCELORDER: `${BASE_URL}/rider/{id}/runsheet/{runsheetId}/order/{orderId}/cancel`

};

export default Config;
