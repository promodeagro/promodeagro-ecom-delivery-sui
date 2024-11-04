import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import these
import Logo from "../../Assets/Images/PTRLogo.png";
import { Box, Button, FormField, SpaceBetween } from '@cloudscape-design/components';
import { FormHelperText } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ValidationEngine } from 'Utils/helperFunctions'; // Assuming you have this utility
import { signIn, validateOtp } from 'Redux-Store/Signin/SigninThunk';

const OtpVerification = () => {
  const { number } = useParams();
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(true);


  
  const handleResentOtp = async () => {
    
      console.log("Calling API with number:", number);
      console.log(signIn.status)
      const result = await dispatch(signIn({ number , userType:"rider"}));
      console.log("API response:", result);
      navigate(`/auth/otp-varification/${number}`); // Ensure to include the '/' and the variable
   
  };


  const [otp, setOtp] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorData, setErrorData] = useState({});


  // Access the Redux state for OTP validation
  const validateOtpRes = useSelector((state) => state.signin);

  const otpValidationSchema = {
    otp: [
      {
        message: "Please enter the OTP",
        type: ValidationEngine.type.MANDATORY,
      },
      {
        message: "OTP must be 6 digits",
        type: ValidationEngine.type.REGEX,
        regex: /^\d{6}$/, // Regex for exactly 6 digits
      },
    ],
  };

  const validateForm = () => {
    const error = ValidationEngine.validate(otpValidationSchema, { otp });
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

      // Dispatch the validateOtp thunk
      dispatch(validateOtp({ number, otp , userType:"rider"}))
        .unwrap() // Optional: Allows you to handle the result directly
        .then(result => {
          console.log("OTP Verified:", result);
        
          localStorage.setItem('accessToken',JSON.stringify(result.data.tokens.accessToken) ); // Save access token
          localStorage.setItem('id',JSON.stringify(result.data.id) ); // Save access token
console.log("rider Id" , JSON.stringify(result.data.id))
          localStorage.setItem(
            "login",
            JSON.stringify(result.data.tokens.accessToken)
          );
          localStorage.setItem('refreshToken', JSON.stringify(result.data.tokens.refreshToken)); // Save access token
          navigate('/app/register/profile-details'); // Redirect to dashboard
        })
        .catch(error => {
          console.error("Error verifying OTP:", error);
          setErrorData({ otp: { message: error.message || "Error verifying OTP" } });
        });
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

  const resetTimer = () => {
    setSeconds(30);
    setIsActive(true);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ display: 'flex', marginTop: '30px', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ width: '133px' }} src={Logo} alt="" />
      </div>

      <SpaceBetween direction='vertical'>
        <Box textAlign='start' variant='h1'>OTP Verification</Box>
        <Box textAlign='start' variant='small'>Enter the <span className='highlight'>six-digit code</span> sent to your Mobile number</Box>
      </SpaceBetween>

      <div style={{ marginTop: '20px' }}>
        <FormField
          label="Enter OTP"
          errorText={isSubmitted && !errorData.isValid && (
            <FormHelperText error>
              {errorData.otp?.message}
            </FormHelperText>
          )}
        >
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </FormField>

        {validateOtpRes.status === 'FAILURE' && (
          <FormHelperText error>
            {validateOtpRes.data?.message || "Error verifying OTP"}
          </FormHelperText>
        )}

        <div style={{ marginTop: '20px' }}>
          <Button variant='link' onClick={handleResentOtp} fullWidth>Resend OTP {seconds} </Button>
        </div>

        <div style={{ position: 'absolute', right: 30, bottom: "10%", left: 30 }}>
          <Button variant='primary' fullWidth onClick={handleSubmit}>Verify OTP</Button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
