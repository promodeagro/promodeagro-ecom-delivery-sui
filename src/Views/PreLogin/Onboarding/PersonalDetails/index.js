import {
  Button,
  FormField,
  Header,
  Input,
  Select,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useState, useEffect } from "react";
import { setPersonalDetails } from "Redux-Store/Onboarding/onboardingSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

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
    if (!fullName) errors.fullName = "Fullname is Required";
    if (!DOB || !/^\d{2}\/\d{2}\/\d{4}$/.test(DOB)) errors.DOB = true; // Date validation
    // Mobile number validation
    if (!number) {
      errors.number = "Mobile Number Required"; // No error message, just mark the field invalid
    } else if (number.length !== 10) {
      errors.number = "Mobile number must be exactly 10 digits."; // Error message for invalid length
    }
    if (!email) {
      errors.email = "Email Required"; // No error message, just mark the field invalid
    } else if (!email.includes("@")) {
      errors.email = "Email must contain '@'."; // Error message for invalid email format
    }

    // Reference Mobile validation
    if (!referenceMobile) {
      errors.referenceMobile = "Mobile Number Required"; // No error message, just mark the field invalid
    } else if (referenceMobile.length !== 10) {
      errors.referenceMobile =
        "Reference mobile number must be exactly 10 digits."; // Error message for invalid length
    }
    if (!addressLine1) errors.addressLine1 = true;
    if (!addressLine2) errors.addressLine2 = true;
    if (!landmark) errors.landmark = true;
    if (!state) errors.state = true;
    if (!city) errors.city = true;
    if (!pincode) errors.pincode = true;
    if (!relation) errors.relation = true;
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formattedDOB = DOB.split("/").reverse().join("-") + "T00:00:00Z"; // Convert to YYYY-MM-DD format
      console.log("Submitting form with data: ", {
        fullName,
        number,
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
      dispatch(
        setPersonalDetails({
          fullName,
          number,
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
        })
      );
      navigate("/auth/register/bank-details");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Refreshing will reset your form data. Are you sure you want to proceed?";
      event.returnValue = message; // Standard way to trigger the confirmation dialog
      return message; // Some browsers require this line for the message to be shown
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div style={{ padding: "1rem 0 0 0" }}>
      <SpaceBetween direction="vertical" size="xl">
        <Header variant="h1">
          <span style={{ fontSize: "32px", fontWeight: "600" }}>
            Personal Details
          </span>
        </Header>
        <SpaceBetween direction="vertical" size="l">
          <SpaceBetween direction="vertical" size="m">
            <Input
              autoFocus
              onChange={(e) => {
                setFullName(e.detail.value);
                setFormErrors((prev) => ({ ...prev, fullName: false }));
              }}
              value={fullName}
              placeholder="Full Name"
              invalid={formErrors.fullName}
            />
            <Input
              type="text"
              onChange={(e) => {
                setDOB(e.detail.value);
                setFormErrors((prev) => ({ ...prev, DOB: false }));
              }}
              value={DOB}
              placeholder="D.O.B in DD/MM/YYYY"
              invalid={formErrors.DOB}
            />
            <FormField errorText={formErrors.number}>
              <Input
                inputMode="numeric"
                type="number"
                onChange={(e) => {
                  const value = e.detail.value;
                  setNumber(value);

                  // Validation logic
                  if (value.length > 10) {
                    setFormErrors((prev) => ({
                      ...prev,
                      number: "Mobile number must be exactly 10 digits.",
                    }));
                  } else if (!/^\d{0,10}$/.test(value)) {
                    setFormErrors((prev) => ({
                      ...prev,
                      number: "Invalid characters in mobile number.",
                    }));
                  } else {
                    setFormErrors((prev) => ({
                      ...prev,
                      number: false, // No error
                    }));
                  }
                }}
                value={number}
                placeholder="Mobile Number"
                invalid={!!formErrors.number}
              />
            </FormField>
            <FormField errorText={formErrors.email}>
              <Input
                inputMode="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.detail.value);
                  setFormErrors((prev) => ({ ...prev, email: false }));
                }}
                value={email}
                placeholder="Email ID"
                invalid={formErrors.email}
              />
            </FormField>
          </SpaceBetween>
          <FormField label="Address">
            <SpaceBetween size="m" direction="vertical">
              <Input
                onChange={(e) => {
                  setAddressLine1(e.detail.value);
                  setFormErrors((prev) => ({ ...prev, addressLine1: false }));
                }}
                value={addressLine1}
                placeholder="Address Line 01"
                invalid={formErrors.addressLine1}
              />
              <Input
                onChange={(e) => {
                  setAddressLine2(e.detail.value);
                  setFormErrors((prev) => ({ ...prev, addressLine2: false }));
                }}
                value={addressLine2}
                placeholder="Address Line 02"
                invalid={formErrors.addressLine2}
              />
              <Input
                onChange={(e) => {
                  setLandmark(e.detail.value);
                  setFormErrors((prev) => ({ ...prev, landmark: false }));
                }}
                value={landmark}
                placeholder="Landmark"
                invalid={formErrors.landmark}
              />
              <Select
                placeholder="Select State"
                onChange={({ detail }) => {
                  setState(detail.selectedOption.value);
                  setFormErrors((prev) => ({ ...prev, state: false }));
                }}
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
                onChange={({ detail }) => {
                  setCity(detail.selectedOption.value);
                  setFormErrors((prev) => ({ ...prev, city: false }));
                }}
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
                inputMode="numeric"
                type="number"
                onChange={(e) => {
                  setPincode(e.detail.value);
                  setFormErrors((prev) => ({ ...prev, pincode: false }));
                }}
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
                onChange={({ detail }) => {
                  setRelation(detail.selectedOption.value);
                  setFormErrors((prev) => ({ ...prev, relation: false }));
                }}
                selectedOption={
                  relation ? { value: relation, label: ` ${relation}` } : null
                }
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
              <FormField errorText={formErrors.referenceMobile}>
                <Input
                  inputMode="numeric"
                  type="number"
                  onChange={(e) => {
                    const value = e.detail.value;
                    setReferenceMobile(value);

                    // Validation logic
                    if (value.length > 10) {
                      setFormErrors((prev) => ({
                        ...prev,
                        referenceMobile:
                          "Mobile number must be exactly 10 digits.",
                      }));
                    } else if (!/^\d{0,10}$/.test(value)) {
                      setFormErrors((prev) => ({
                        ...prev,
                        referenceMobile: "Invalid characters in mobile number.",
                      }));
                    } else {
                      setFormErrors((prev) => ({
                        ...prev,
                        referenceMobile: false, // No error
                      }));
                    }
                  }}
                  value={referenceMobile}
                  placeholder="Mobile Number"
                  invalid={!!formErrors.referenceMobile}
                />
              </FormField>
            </SpaceBetween>
          </FormField>
          <div style={{ width: "80%", display: "flex", margin: "0 auto" }}>
            <Button variant="primary" fullWidth onClick={handleSubmit}>
              Complete
            </Button>
          </div>
        </SpaceBetween>
      </SpaceBetween>
    </div>
  );
};

export default PersonalDetails;
