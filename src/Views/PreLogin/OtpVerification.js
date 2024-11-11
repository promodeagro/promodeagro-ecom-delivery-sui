import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../Assets/Images/PTRLogo.png";
import { Button, FormField, SpaceBetween } from "@cloudscape-design/components";
import { FormHelperText } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { ValidationEngine } from "Utils/helperFunctions";
import { signIn, validateOtp } from "Redux-Store/Signin/SigninThunk";

const OtpVerification = () => {
  const { number } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorData, setErrorData] = useState({});
  const validateOtpRes = useSelector((state) => state.signin);

  const handleResentOtp = async () => {
    console.log("Calling API with number:", number);
    const result = await dispatch(signIn({ number, userType: "rider" }));
    console.log("API response:", result);
    setSeconds(30);
    setIsActive(true);
    navigate(`/auth/otp-varification/${number}`);
  };

  const otpValidationSchema = {
    otp: [
      {
        message: "Please enter the OTP",
        type: ValidationEngine.type.MANDATORY,
      },
      {
        message: "OTP must be 6 digits",
        type: ValidationEngine.type.REGEX,
        regex: /^\d{6}$/,
      },
    ],
  };

  const validateForm = () => {
    const error = ValidationEngine.validate(otpValidationSchema, {
      otp: otp.join(""),
    });
    setErrorData(error);
    return error.isValid;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (validateForm()) {
      if (!number) {
        setErrorData({ otp: { message: "Mobile number is required." } });
        return;
      }
      dispatch(validateOtp({ number, otp: otp.join(""), userType: "rider" }))
        .unwrap()
        .then((result) => {
          localStorage.setItem(
            "accessToken",
            JSON.stringify(result.data.tokens.accessToken)
          );
          localStorage.setItem("id", JSON.stringify(result.data.id));
          localStorage.setItem(
            "login",
            JSON.stringify(result.data.tokens.accessToken)
          );
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(result.data.tokens.refreshToken)
          );
          console.log("OTP verification successful!"); 

          navigate("/app/home");
        })
        .catch((error) => {
          console.error("Error verifying OTP:", error);
          setErrorData({
            otp: { message: error.message || "Error verifying OTP" },
          });
        });
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5)
        document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    document.getElementById("otp-input-0")?.focus();
  }, []);
  

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: '10% 0 4% 0', 
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="" />
      </div>
      <div>
        <h1>OTP Verification</h1>
        <p style={{ color: "gray", width: "14rem" }}>
          Enter the <span className="highlight">six-digit code</span> sent to
          your Mobile number
        </p>
      </div>

      <div>
        <SpaceBetween size="m">
          <FormField
            label="Enter OTP"
            errorText={
              isSubmitted &&
              !errorData.isValid && (
                <FormHelperText error>{errorData.otp?.message}</FormHelperText>
              )
            }
          >
            <div style={{ display: "flex", gap: "10px" }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => {
                    handleKeyDown(e, index);
                    if (index === otp.length - 1 && e.key === "Enter") {
                      handleSubmit(); 
                    }
                  }}
                  style={{
                    width: "2.2rem",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    height: "3rem",
                    border: "1px solid black",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </div>
          </FormField>

          {validateOtpRes.status === "FAILURE" && (
            <FormHelperText error>
              {validateOtpRes.data?.message || "Error verifying OTP"}
            </FormHelperText>
          )}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              disabled={seconds > 0}
              variant="link"
              onClick={handleResentOtp}
            >
              {seconds > 0 ? `Resend OTP in ${seconds} sec` : "Resend OTP"}
            </Button>
          </div>
        </SpaceBetween>

        <div
          style={{ position: "absolute", right: 30, bottom: "10%", left: 30 }}
        >
          <Button variant="primary" fullWidth onClick={handleSubmit}>
            Verify OTP
          </Button>
        </div>
      </div>
    </>
  );
};  

export default OtpVerification;
