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

  // Access data from Redux store
  const { personalDetails, bankDetails, documents } = useSelector(
    (state) => state.onboarding
  );

  // Submit handler to trigger the API call
  const handleSubmit = () => {
    // Dispatch the API call action
    dispatch(submitOnboardingData());

    // After successful submission, navigate to the application status page
    navigate("/auth/register/application-status");
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Refreshing or navigating away will reset your form data. Are you sure you want to proceed?";

      // Standard way to trigger the confirmation dialog
      event.returnValue = message;
      return message; // Some browsers require this line to show the confirmation dialog
    };

    // Attach the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <SpaceBetween size="xxl">
      <Header variant="h1">
        <span style={{ fontSize: "32px", fontWeight: "600" }}>
          Review & Submit
        </span>
      </Header>

      <SpaceBetween direction="vertical" size="m">
        {/* Personal Details Section */}
        <FormField
          label={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Personal Details <Button variant="link">Edit</Button>
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

        {/* Bank Details Section */}
        <FormField
          label={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Bank Details <Button variant="link">Edit</Button>
            </span>
          }
        >
          <SpaceBetween size="m" direction="vertical">
            <Input disabled value={bankDetails.bankName || ""} />
            <Input disabled value={bankDetails.acc || ""} />
            <Input disabled value={bankDetails.ifsc || ""} />
          </SpaceBetween>
        </FormField>

        {/* Documents Section */}
        <FormField label="Documents">
          <SpaceBetween size="s" direction="horizontal">
            <SpaceBetween direction="vertical" size="s">
              {/* Display documents dynamically */}
              {documents && documents.length > 0 ? (
                documents.map((doc, index) => {
                  const docKey = Object.keys(doc)[0]; // Get the key (e.g., 'userPhoto')
                  const file = doc[docKey][0]; // Get the first file object (assuming only one file)

                  return (
                    <Box key={index} display="flex" alignItems="center">
                      <Icon
                        name="status-positive"
                        size="small"
                        variant="success"
                        style={{ marginRight: "8px" }}
                      />
                      {file ? (
                        <span>
                          <strong>{doc.name}</strong>
                          <Box>File Size: {file.size || "Unknown"}</Box>
                          <Box>
                            Last Modified:{" "}
                            {file.lastModified ? new Date(file.lastModified).toLocaleDateString() : "Unknown"}
                          </Box>
                        </span>
                      ) : (
                        <span>No {docKey} uploaded</span>
                      )}
                    </Box>
                  );
                })
              ) : (
                <Box>No documents uploaded</Box>
              )}
            </SpaceBetween>
          </SpaceBetween>
        </FormField>

        <Button onClick={handleSubmit} variant="primary" fullWidth>
          Submit
        </Button>
      </SpaceBetween>
    </SpaceBetween>
  );
};

export default ReviewAndSubmit;
