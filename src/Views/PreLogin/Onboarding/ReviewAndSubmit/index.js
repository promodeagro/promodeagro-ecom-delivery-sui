import {
  Button,
  FormField,
  Header,
  Icon,
  Input,
  Box,
  SpaceBetween,
} from "@cloudscape-design/components";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewAndSubmit = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/auth/register/application-status");
  };
  return (
    <SpaceBetween size="xxl">
      <Header varant="h1">
        <span style={{ fontSize: "32px", fontWeight: "600" }}>
          Review & Submit
        </span>
      </Header>

      <SpaceBetween direction="vertical" size="m">
        {/* persnal details */}
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
            <Input disabled placeholder="Salman Bin Moosa" />
            <Input disabled placeholder="30/05/1998" />
            <Input disabled placeholder="8886834219" />
            <Input disabled placeholder="salmanbinmoosa@gmail.com" />
            <Input disabled placeholder="Alkapur" />
            <Input disabled placeholder="Alkapur Neknampur" />
            <Input disabled placeholder="Zeeshan Hotel" />
            <Input disabled placeholder="Telangana" />
            <Input disabled placeholder="Hyderabad" />
            <Input disabled placeholder="500081" />
            <Input disabled placeholder="Yahiya Aly Khan" />
            <Input disabled placeholder="9392020089" />
          </SpaceBetween>
        </FormField>

        {/* Bank Details */}
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
            <Input disabled placeholder="HDFC BANK" />
            <Input disabled placeholder="100500459883" />
            <Input disabled placeholder="HDFC00003881" />
          </SpaceBetween>
        </FormField>

        <FormField label="Documents">
          <SpaceBetween size="s" direction="horizontal">
            <Icon name="status-positive" size="small" variant="success" />
            <SpaceBetween direction="vertical">
              <Box>User Photo</Box>
              <Box>File Size in bytes</Box>
              <Box>Last date modified</Box>
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
