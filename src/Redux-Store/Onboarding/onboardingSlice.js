import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    fullName: "",
    number: '',
    dob: "",
    email: "",
    address: {
      address1: "",
      address2: "",
      landmark: "",
      state: "",
      city: "",
      pincode: "",
    },
    reference: {
      relation: "",
      number: "",
    },
  },
  bankDetails: {
    acc: "",
    bankName: "",
    ifsc: "",
  },
  documents: [
    { name: "userPhoto", image: "" },
    { name: "aadharFront", image: "" },
    { name: "aadharBack", image: "" },
    { name: "pan", image: "" },
    { name: "drivingFront", image: "" },
    { name: "drivingBack", image: "" },
    { name: "vehicleImage", image: "" },
    { name: "rcFront", image: "" },
    { name: "rcBack", image: "" }
  ],
  uploadUrl: "", 
  loading: false,
  error: null,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setPersonalDetails: (state, action) => {
      console.log("Updating personal details with payload: ", action.payload);
      state.personalDetails = action.payload;
    },
        setBankDetails: (state, action) => {
          console.log("Updating bank details with payload: ", action.payload);

      state.bankDetails = action.payload;
    },
    setDocuments: (state, action) => {
      console.log("Updating documents with payload: ", action.payload);
      state.documents = action.payload;
    },
    setUploadUrl(state, action) {
      state.uploadUrl = action.payload; 
    },
      updateLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPersonalDetails, setBankDetails, setDocuments, updateLoading, setError, setUploadUrl } = onboardingSlice.actions;

export default onboardingSlice.reducer;
