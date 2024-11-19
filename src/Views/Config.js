const BASE_URL = "https://hru1nl9r81.execute-api.ap-south-1.amazonaws.com"

const Config = {
  BASE_URL,
   SIGN_IN:`${BASE_URL}/auth/signin`,
   VALIDATE_OTP:`${BASE_URL}/auth/validate-otp`,
   ONBOARDING_SUBMIT:`${BASE_URL}/register`,
   GETURL:`${BASE_URL}/rider/uploadUrl`,
   GETRUNSHEETS:`${BASE_URL}/rider/{id}/runsheet`
};

export default Config;
