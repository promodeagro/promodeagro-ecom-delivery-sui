const BASE_URL = "https://hru1nl9r81.execute-api.ap-south-1.amazonaws.com"

const Config = {
  BASE_URL,
   SIGN_IN:`${BASE_URL}/auth/signin`,
   VALIDATE_OTP:`${BASE_URL}/auth/validate-otp`,
   PERSONAL_DETAILS:`${BASE_URL}/rider/personal-details`,

};

export default Config;
