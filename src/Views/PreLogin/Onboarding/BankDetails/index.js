import React, { useState, useEffect } from "react";
import { Button, Header, Input, Select, SpaceBetween, FormField } from "@cloudscape-design/components";
import { useDispatch } from "react-redux";
import { setBankDetails } from "Redux-Store/Onboarding/onboardingSlice"; // Import Redux action
import { useNavigate } from "react-router-dom"; // Import for navigation

const BankDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bankName, setBankName] = useState(null);
  const [acc, setAcc] = useState(""); // Account Number
  const [reAcc, setReAcc] = useState(""); // Re-enter Account Number
  const [ifsc, setIfsc] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track form submission

  // Handle form submission
  const handleSubmit = () => {
    setSubmitted(true);

    // Only save the bank details if all required fields are filled
    if (bankName && acc && reAcc && ifsc) {
      dispatch(
        setBankDetails({
          bankName: bankName.value,
          acc: acc,
          // reAccountNumber: reAcc,
          ifsc: ifsc,
        })
      );
      navigate("/app/register/documents"); // Move to the next step after form submission
    }
  };

  // Handle input change to reset invalid state
  const handleInputChange = (setter) => (e) => {
    setter(e.detail.value);
    setSubmitted(false); // Reset invalid state when user starts typing
  };

  // Step 1: Show confirmation dialog on page refresh
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Refreshing will reset your form data. Are you sure you want to proceed?";
      event.returnValue = message;  // Standard way to trigger the confirmation dialog
      return message;  // For some browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <SpaceBetween size="xxl">
      <Header variant="h1">
        <span style={{ fontSize: "32px", fontWeight: "600" }}>Bank Details</span>
      </Header>

      <SpaceBetween direction="vertical" size="s">
        <Select
          invalid={submitted && !bankName} // Mark as invalid if submitted and not selected
          placeholder="Select Bank"
          selectedOption={bankName}
          onChange={({ detail }) =>
            setBankName({
              label: detail.selectedOption.label,
              value: detail.selectedOption.value,
            })
          }
          options={[
            { label: "State Bank of India", value: "SBI" },
            { label: "HDFC Bank", value: "HDFC" },
            { label: "ICICI Bank", value: "ICICI" },
          ]}
        />

        <FormField>
          <Input
            placeholder="Account Number"
            value={acc}
            onChange={handleInputChange(setAcc)} // Update account number only
            invalid={submitted && !acc} // Mark as invalid if submitted and empty
          />
        </FormField>

        <FormField>
          <Input
            placeholder="Re-enter Account Number"
            value={reAcc}
            onChange={handleInputChange(setReAcc)} // Update re-enter account number only
            invalid={submitted && !reAcc} // Mark as invalid if submitted and empty
          />
        </FormField>

        <FormField>
          <Input
            placeholder="IFSC Code"
            value={ifsc}
            onChange={handleInputChange(setIfsc)}
            invalid={submitted && !ifsc} // Mark as invalid if submitted and empty
          />
        </FormField>
      </SpaceBetween>

      <div style={{ position: "absolute", right: 30, bottom: "10%", left: 30 }}>
        <Button variant="primary" fullWidth onClick={handleSubmit}>
          Complete
        </Button>
      </div>
    </SpaceBetween>
  );
};

export default BankDetails;
