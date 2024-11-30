import {
  Button,
  FormField,
  Header,
  Icon,
  Input,
  Box,
  SpaceBetween,
} from "@cloudscape-design/components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitOnboardingData } from "Redux-Store/Onboarding/onboardingThunk";

const ReviewAndSubmit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { personalDetails, bankDetails, documents } = useSelector(
    (state) => state.onboarding
  );
  const handleSubmit = () => {
    dispatch(submitOnboardingData());
    navigate("/auth/register/application-status");
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Refreshing or navigating away will reset your form data. Are you sure you want to proceed?";
      event.returnValue = message;
      return message; // Some browsers require this line to show the confirmation dialog
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div style={{padding: '1rem 0 0 0'}}>
    <SpaceBetween size="xl">
      <Header variant="h1">
        <span style={{ fontSize: "32px", fontWeight: "600" }}>
          Review & Submit
        </span>
      </Header>
      <SpaceBetween direction="vertical" size="m">
        <FormField
          label={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Personal Details 
            </span>
          }
        >
          <SpaceBetween size="m" direction="vertical">
            <Input disabled value={personalDetails.fullName || ""} />
            <Input disabled value={personalDetails.dob || ""} />
            <Input disabled value={personalDetails.number || ""} />
            <Input disabled value={personalDetails.email || ""} />
            <Input disabled value={personalDetails.address.address1 || ""} />
            <Input disabled value={personalDetails.address.address2 || ""} />
            <Input disabled value={personalDetails.address.landmark || ""} />
            <Input disabled value={personalDetails.address.state || ""} />
            <Input disabled value={personalDetails.address.city || ""} />
            <Input disabled value={personalDetails.address.pincode || ""} />
            <Input disabled value={personalDetails.reference.relation || ""} />
            <Input disabled value={personalDetails.reference.number || ""} />
          </SpaceBetween>
        </FormField>
        <FormField
          label={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Bank Details 
            </span>
          }
        >
          <SpaceBetween size="m" direction="vertical">
            <Input disabled value={bankDetails.bankName || ""} />
            <Input disabled value={bankDetails.acc || ""} />
            <Input disabled value={bankDetails.ifsc || ""} />
          </SpaceBetween>
        </FormField>
        <FormField label="Documents">
          <SpaceBetween size="s" direction="horizontal">
            <SpaceBetween direction="vertical" size="s">
              {documents && documents.length > 0 ? (
                documents.map((doc, index) => {
                  const docKey = Object.keys(doc)[0]; // Get the key (e.g., 'userPhoto')
                  const file = doc[docKey][0]; // Get the first file object (assuming only one file)
                  return (
                    <Box key={index}>
                      <div style={{display: 'flex', gap: '0.5rem'}}>
                        <span style={{marginTop:'0.2rem'}}>
                      <Icon
                        name="status-positive"
                        size="small"
                        variant="success"
                      /></span>
                      {file ? (
                        <span>
                          <strong>{doc.name}</strong>
                          <Box>File Size: {file.size || "Unknown"}</Box>
                          <Box>
                            Last Modified:
                            {file.lastModified ? new Date(file.lastModified).toLocaleDateString() : "Unknown"}
                          </Box>
                        </span>
                      ) : (
                        <span>No {docKey} uploaded</span>
                      )}
                      </div>
                    </Box>
                  );
                })
              ) : (
                <Box>No documents uploaded</Box>
              )}
            </SpaceBetween>
          </SpaceBetween>
        </FormField>
        <div style={{width: '80%', display:'flex', margin: '0 auto'}}>
        <Button onClick={handleSubmit} variant="primary" fullWidth>
          Submit
        </Button>
        </div>
      </SpaceBetween>
    </SpaceBetween>
        </div>
  );
};

export default ReviewAndSubmit;
