import { 
    Button,
    Header,
    Input,
    Select,
    SpaceBetween,
    FormField,
  } from "@cloudscape-design/components";
  import React, { useState } from "react";
  
  const BankDetails = () => {
    const [bankName, setBankName] = useState(null);
    const [acc, setAcc] = useState(""); // State for Account Number
    const [reAcc, setReAcc] = useState(""); // State for Re-enter Account Number
    const [ifsc, setIfsc] = useState("");
    const [submitted, setSubmitted] = useState(false); // Track if the form was submitted
  
    // Handle form submission
    const handleSubmit = () => {
      setSubmitted(true);
    };
  
    // Handle input change to reset invalid state
    const handleInputChange = (setter) => (e) => {
      setter(e.detail.value);
      setSubmitted(false); // Reset invalid state when user starts typing
    };
  
    return (
      <SpaceBetween size="xxl">
        <Header variant="h1">
          <span style={{ fontSize: "32px", fontWeight: "600" }}>
            Bank Details
          </span>
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
  