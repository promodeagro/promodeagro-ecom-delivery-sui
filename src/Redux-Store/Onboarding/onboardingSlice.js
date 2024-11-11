import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
  fullName: "",
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
  loading: false,
  error: null,
};

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    setPersonalDetails: (state, action) => {
      const { fullName, dob, email, address, reference } = action.payload;
      state.fullName = fullName;
      state.dob = dob;
      state.email = email;
      state.address = address;
      state.reference = reference;
    },
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPersonalDetails, updateLoading, setError } = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;
