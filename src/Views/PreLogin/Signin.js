import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Images/PTRLogo.png";
import scooterImg from "../../Assets/Images/scooterImg.png";
import {
  Box,
  Button,
  FormField,
  Input,
  SpaceBetween,
} from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "Redux-Store/Signin/SigninThunk";
import { ValidationEngine } from "Utils/helperFunctions";

const mobileValidationSchema = {
  number: [
    {
      message: "Please enter Mobile number",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter a valid Mobile Number",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.MOBILE_NUMBER_REGEX,
    },
  ],
};

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      setShowSplash(true);
      localStorage.setItem("hasSeenSplash", "true");
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const validateForm = () => {
    const error = ValidationEngine.validate(mobileValidationSchema, { number });
    return error;
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    setIsSubmitted(true);
    const error = validateForm();
    if (error.isValid) {
      console.log("Calling API with number:", number);
      const result = await dispatch(signIn({ number, userType: "rider" }));
      console.log("API response:", result.payload.data);
      navigate(`/auth/otp-varification/${number}`);
    } else {
      console.log("Validation failed:", error);
    }

    setIsSubmitting(false);
  };

  const errorData = validateForm();

  if (showSplash) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <img src={Logo} alt="Logo" />
      </div>
    );
  }

  return (
    <SpaceBetween size="xl">
      <SpaceBetween size="s">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10% 0 16% 0",
          }}
        >
          <img src={Logo} alt="Logo" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={scooterImg} style={{ height: "18em", width: "18rem" }} />
        </div>
      </SpaceBetween>
      <SpaceBetween size="m">
        <div
          style={{
            fontSize: "2.3rem",
            fontWeight: "bold",
            width: "20rem",
            margin: "0 auto",
          }}
        >
          Hello, <br />
          <span style={{ color: "#0972D3" }}>Promode Delivery Partner!</span>
        </div>
        <SpaceBetween size="m">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              <div style={{ width: "20rem" }}>
                <FormField
                  errorText={
                    isSubmitted &&
                    !errorData.isValid && <>{errorData?.number?.message}</>
                  }
                >
                  <Input
                    autoFocus
                    value={number}
                    type="number"
                    onChange={(e) => setNumber(e.detail.value)}
                    placeholder="Enter Your Mobile Number"
                  />
                </FormField>
              </div>
              <div style={{ width: "20rem" }}>
                <Button onClick={handleSubmit} variant="primary" fullWidth>
                  Sign In
                </Button>
              </div>
            </div>
          </form>
          <Box textAlign="center" variant="p">
            <span style={{ color: "gray" }}>Don’t have an account? </span>
            <span
              className="blue pointer"
              onClick={() => navigate("/auth/register")}
            >
              Register
            </span>
          </Box>
        </SpaceBetween>
      </SpaceBetween>
    </SpaceBetween>
  );
};

export default Signin;
