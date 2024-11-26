import { Button, FormField, Header, Input, Select, SpaceBetween } from '@cloudscape-design/components';
import React, { useState, useEffect } from 'react';
import { setPersonalDetails } from 'Redux-Store/Onboarding/onboardingSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [DOB, setDOB] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [relation, setRelation] = useState("");
  const [referenceMobile, setReferenceMobile] = useState("");

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    DOB: false,
    number: false,
    email: false,
    addressLine1: false,
    addressLine2: false,
    landmark: false,
    state: false,
    city: false,
    pincode: false,
    relation: false,
    referenceMobile: false,
  });

  const handleSubmit = () => {
    const errors = {};
  
    // Form validation
    if (!fullName) errors.fullName = true;
    if (!DOB || !/^\d{2}\/\d{2}\/\d{4}$/.test(DOB)) errors.DOB = true; // Date validation
    if (!number) errors.number = true;
    if (!email) errors.email = true;
    if (!addressLine1) errors.addressLine1 = true;
    if (!addressLine2) errors.addressLine2 = true;
    if (!landmark) errors.landmark = true;
    if (!state) errors.state = true;
    if (!city) errors.city = true;
    if (!pincode) errors.pincode = true;
    if (!relation) errors.relation = true;
    if (!referenceMobile) errors.referenceMobile = true;
  
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      // Convert DOB to ISO format "YYYY-MM-DDT00:00:00Z"
      const formattedDOB = DOB.split('/').reverse().join('-') + "T00:00:00Z"; // Convert to YYYY-MM-DD format
  
      // Log form data to ensure it's correct
      console.log("Submitting form with data: ", {
        fullName,
        number, // Include mobileNumber here
        dob: formattedDOB,
        email,
        address: {
          address1: addressLine1,
          address2: addressLine2,
          landmark,
          state,
          city,
          pincode,
        },
        reference: {
          relation,
          number: referenceMobile,
        },
      });
  
      // Dispatch the setPersonalDetails action
      dispatch(
        setPersonalDetails({
          fullName,
          number, // Include mobileNumber here
          dob: formattedDOB,  // Use the formatted DOB
          email,
          address: {
            address1: addressLine1,
            address2: addressLine2,
            landmark,
            state,
            city,
            pincode,
          },
          reference: {
            relation,
            number: referenceMobile,
          },
        })
      );
  
      // Navigate to next screen
      navigate("/app/register/bank-details");
    }
  };
  
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Customize the message that appears in the confirmation dialog
      const message = "Refreshing will reset your form data. Are you sure you want to proceed?";
      
      event.returnValue = message;  // Standard way to trigger the confirmation dialog
      return message;  // Some browsers require this line for the message to be shown
    };

    // Attach the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);


  return (
    <SpaceBetween direction="vertical" size="xxl"> 

      <Header variant="h1">
        <span style={{ fontSize: '32px', fontWeight: '600' }}>Personal Details</span>
      </Header>

      <SpaceBetween direction="vertical" size="l">
        <SpaceBetween direction="vertical" size="m">
          <Input
            onChange={(e) => setFullName(e.detail.value)}
            value={fullName}
            placeholder="Full Name"
            invalid={formErrors.fullName}
          />
          <Input
            type="text"
            onChange={(e) => setDOB(e.detail.value)}
            value={DOB}
            placeholder="D.O.B in DD/MM/YYYY"
            invalid={formErrors.DOB}
          />
          <Input
            onChange={(e) => setNumber(e.detail.value)}
            value={number}
            placeholder="Mobile Number"
            invalid={formErrors.mobileNumber}
          />
          <Input
            onChange={(e) => setEmail(e.detail.value)}
            value={email}
            placeholder="Email ID"
            invalid={formErrors.email}
          />
        </SpaceBetween>
        <FormField label="Address">
          <SpaceBetween size="m" direction="vertical">
            <Input
              onChange={(e) => setAddressLine1(e.detail.value)}
              value={addressLine1}
              placeholder="Address Line 01"
              invalid={formErrors.addressLine1}
            />
            <Input
              onChange={(e) => setAddressLine2(e.detail.value)}
              value={addressLine2}
              placeholder="Address Line 02"
              invalid={formErrors.addressLine2}
            />
            <Input
              onChange={(e) => setLandmark(e.detail.value)}
              value={landmark}
              placeholder="Landmark"
              invalid={formErrors.landmark}
            />
            <Select
              placeholder="Select State"
              onChange={({ detail }) => setState(detail.selectedOption.value)}
              selectedOption={state ? { value: state } : null}
              options={[
                { label: "Telangana", value: "Telangana" },
                { label: "Andhra Pradesh", value: "Andhra Pradesh" },
                { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
                { label: "Assam", value: "Assam" },
                { label: "Bihar", value: "Bihar" },
                { label: "Chhattisgarh", value: "Chhattisgarh" },
                { label: "Goa", value: "Goa" },
                { label: "Gujarat", value: "Gujarat" },
              ]}
              invalid={formErrors.state}
            />
            <Select
              placeholder="Select City"
              onChange={({ detail }) => setCity(detail.selectedOption.value)}
              selectedOption={city ? { value: city, label: `${city}` } : null}
              options={[
                { label: "Hyderabad", value: "Hyderabad" },
                { label: "Warangal", value: "Warangal" },
                { label: "Delhi", value: "Delhi" },
                { label: "Mumbai", value: "Mumbai" },
                { label: "Bengaluru", value: "Bengaluru" },
                { label: "Chennai", value: "Chennai" },
                { label: "Kolkata", value: "Kolkata" },
                { label: "Pune", value: "Pune" },
                { label: "Ahmedabad", value: "Ahmedabad" },
              ]}
              invalid={formErrors.city}
            />
            <Input
              onChange={(e) => setPincode(e.detail.value)}
              value={pincode}
              placeholder="Pincode"
              invalid={formErrors.pincode}
            />
          </SpaceBetween>
        </FormField>
        <FormField label="Reference Contact">
          <SpaceBetween size="m" direction="vertical">
            <Select
              placeholder="Relation"
              onChange={({ detail }) => setRelation(detail.selectedOption.value)}
              selectedOption={relation ? { value: relation, label: ` ${relation}` } : null}
              options={[
                { label: "Friend", value: "Friend" },
                { label: "Family", value: "Family" },
                { label: "Relative", value: "Relative" },
                { label: "Sibling", value: "Sibling" },
                { label: "Mentor", value: "Mentor" },
                { label: "Other", value: "Other" },
              ]}
              invalid={formErrors.relation}
            />
            <Input
              onChange={(e) => setReferenceMobile(e.detail.value)}
              value={referenceMobile}
              placeholder="Mobile Number"
              invalid={formErrors.referenceMobile}
            />
          </SpaceBetween>
        </FormField>

        <Button variant="primary" fullWidth onClick={handleSubmit}>
          Complete
        </Button>
      </SpaceBetween>
      
    </SpaceBetween>
  );
};

export default PersonalDetails;
