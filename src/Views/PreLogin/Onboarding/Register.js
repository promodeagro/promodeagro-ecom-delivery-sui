import { Box } from "@cloudscape-design/components";
import Icon from "@cloudscape-design/components/icon";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const timelineContainerStyle = {
    position: "relative",
    margin: "0",
  };

  const events = [
    {
      step: "Step 1",
      title: "Personal Details",
      path: "/app/register/personal-details",
    },
    {
      step: "Step 2",
      title: "Bank Details",
      // , path: "/app/register/bank-details"
    },
    {
      step: "Step 3",
      title: "Documents",
      // , path: "/app/register/documents"
    },
    {
      step: "Step 4",
      title: "Review and Submit",
      // , path: "/app/register/review-and-submit"
    },
  ];

  const timelineItemStyle = (index, isLast) => ({
    position: "relative",
    paddingLeft: "30px",
    marginBottom: isLast ? "0" : "15px",
    color: index === 0 ? "#0073bb" : "gray",
    cursor: "pointer",
  });

  const timelineItemBeforeStyle = (index) => ({
    content: '""',
    position: "absolute",
    left: "-3px",
    top: "0",
    width: "16px",
    height: "16px",
    backgroundColor: index === 0 ? "#0073bb" : "gray", // Blue for Step 1, gray for others
    borderRadius: "50%",
    border: `2px solid ${index === 0 ? "#0073bb" : "gray"}`, // Blue border for Step 1, gray for others
  });

  const timelineConnectorStyle = (index) => ({
    position: "absolute",
    left: "6px",
    width: "1px",
    backgroundColor: "gray", // Blue connector for Step 1, gray for others
    zIndex: 0,
  });

  const timelineStepStyle = {
    fontSize: "12px",
    color: "gray",
  };

  const timelineTitleStyle = {
    fontSize: "12px",
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  };

  return (
    <Box>
      <h1>Register</h1>
      <span style={{ color: "gray" }}>
        Complete your
        <span className="highlight"> 4 Step Verification</span> to Register
        Promode Delivery Partner
      </span>
      <div style={{ marginTop: "2rem", padding: "1rem" }}>
        <div style={timelineContainerStyle}>
          {events.map((event, index) => (
            <div
              key={index}
              style={timelineItemStyle(index, index === events.length - 1)}
              onClick={() => navigate(event.path)}
            >
              {index < events.length - 1 && (
                <div
                  style={{
                    ...timelineConnectorStyle(index),
                    height: "calc(120%)",
                    top: "calc(12px)",
                  }}
                ></div>
              )}
              <div style={timelineItemBeforeStyle(index)}></div>
              <div style={timelineStepStyle}>{event.step}</div>
              <div style={timelineTitleStyle}>
                <h3 style={{ margin: 0 }}>{event.title}</h3>
                <Icon name="angle-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Register;
