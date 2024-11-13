import { Button, DatePicker, FormField, Header, Input, Select, SpaceBetween } from '@cloudscape-design/components';
import React, { useState } from 'react';
import { navigate } from 'Utils/helperFunctions';

const PersonalDetails = () => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [DOB, setDOP] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
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
    mobileNumber: false,
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
    let isValid = true;
    const errors = {};

    if (!fullName) {
      isValid = false;
      errors.fullName = true;
    }
    if (!DOB) {
      isValid = false;
      errors.DOB = true;
    }
    if (!mobileNumber) {
      isValid = false;
      errors.mobileNumber = true;
    }
    if (!email) {
      isValid = false;
      errors.email = true;
    }
    if (!addressLine1) {
      isValid = false;
      errors.addressLine1 = true;
    }
    if (!addressLine2) {
      isValid = false;
      errors.addressLine2 = true;
    }
    if (!landmark) {
      isValid = false;
      errors.landmark = true;
    }
    if (!state) {
      isValid = false;
      errors.state = true;
    }
    if (!city) {
      isValid = false;
      errors.city = true;
    }
    if (!pincode) {
      isValid = false;
      errors.pincode = true;
    }
    if (!relation) {
      isValid = false;
      errors.relation = true;
    }
    if (!referenceMobile) {
      isValid = false;
      errors.referenceMobile = true;
    }
    setFormErrors(errors);
    if (isValid) {
      navigate("/app/register/bank-details");
    }
  };

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
          <DatePicker
            onChange={({ detail }) => setDOP(detail.value)}
            value={DOB}
            openCalendarAriaLabel={(selectedDate) =>
              "Choose certificate expiry date" + (selectedDate ? `, selected date is ${selectedDate}` : "")
            }
            placeholder="D.O.B in YYYY-MM-DD"
            invalid={formErrors.DOB}
          />
          <Input
            onChange={(e) => setMobileNumber(e.detail.value)}
            value={mobileNumber}
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
