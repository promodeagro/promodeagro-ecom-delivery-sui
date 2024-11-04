// const BASE_URL = "https://7fy0psdjel.execute-api.us-east-1.amazonaws.com";
const BASE_URL = "https://hru1nl9r81.execute-api.ap-south-1.amazonaws.com"

const Config = {
  BASE_URL,
  FETCH_QUOTATIONS: `${BASE_URL}/users`,
  FINISH_PRODUCT_SPECIFICATIONS: `${BASE_URL}/users`,
  FINISH_PRODUCT_VIEW_ATACHMENTS: `${BASE_URL}/users`,
  FINISH_PRODUCT_DETAILS: `${BASE_URL}/users`,
  FETCH_ORDERS: `${BASE_URL}/users`,
  ORDERS_DETAILS:`${BASE_URL}/users`,
  ORDERS_VIEWATTACHMENTS:`${BASE_URL}/users`,
   FETCH_BATCH_SHEET:`${BASE_URL}/users`,
   FETCH_PRODUCTS:`${BASE_URL}/users`,
   FETCH_RAW_MATERIALS:`${BASE_URL}/users`,
   FETCH_PURCHASE_ORDER:`${BASE_URL}/users`,
   FETCH_PURCHASE_REQUSTION_LIST:`${BASE_URL}/users`,
   VENDOR_PROFILE:`${BASE_URL}/users`,
   FETCH_CUSTOMER:`${BASE_URL}/user`,
// need to change the endpoind afte gettinfg api
   FETCH_RUNSHEETS:`${BASE_URL}/dev/getAllUnpackedOrders`,
   SIGN_IN:`${BASE_URL}/auth/signin`,
   VALIDATE_OTP:`${BASE_URL}/auth/validate-otp`,
   UPDATE_PERSONAL_DETAILS:`${BASE_URL}/rider/personal-details`,
   UPDATE_BANK_DETAILS:`${BASE_URL}/rider/bank-details`,
   RIDER_DOCUMENT_DETAILS:`${BASE_URL}/rider/document-details`,
   SUBMIT_RIDER_PROFILE:`${BASE_URL}/rider/submit/{id}`,
};

export default Config;
