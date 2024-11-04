  import React, { useState } from 'react';
  import vector from "../../Assets/Images/Vector.png";
  import Logo from "../../Assets/Images/PTRLogo.png";
  import scooterImg from "../../Assets/Images/scooterImg.png";
  import { Box, Button, FormField, Input, SpaceBetween } from '@cloudscape-design/components';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { signIn } from 'Redux-Store/Signin/SigninThunk'; 
  import { ValidationEngine } from 'Utils/helperFunctions';

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

    // Form validation function
    const validateForm = () => {
      const error = ValidationEngine.validate(mobileValidationSchema, { number });
      return error;
    };

    const handleSubmit = async () => {
      setIsSubmitted(true);
      const error = validateForm();
      
      if (error.isValid) {
        console.log("Calling API with number:", number);
        const result = await dispatch(signIn({ number , userType:"rider" }));
        console.log("API response:", result.payload.data);
        navigate(`/auth/otp-varification/${number}`); // Ensure to include the '/' and the variable
      } else {
        console.log("Validation failed:", error);
      }
    };

    const errorData = validateForm();

    return (
      <div style={{ width: "100%", height: "100%" }}>
        {/* Top Logo */}
        <div style={{ display: 'flex', marginTop: '30px', justifyContent: 'center', alignItems: 'center' }}>
          <img style={{ width: '133px' }} src={Logo} alt="Logo" />
        </div>

        {/* Scooter Image */}
        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={scooterImg} style={{
            width: '100%',
            height: 'auto',
            maxWidth: '75%',  // Limits the maximum width for larger screens
            maxHeight: '400px', // Ensures it doesn't exceed the container height
            objectFit: 'contain'  // Keeps the aspect ratio intact
          }} alt="Scooter" />
        </div>

        {/* Bottom Area */}
        <div style={{
          position: 'absolute',
          right: 30,
          bottom: "10%",
          left: 30,
          gap: 10,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box variant='h1'>
            <span style={{ fontSize: '32px', fontWeight: '600', lineHeight: '35px' }}>
              Hello, <br /> <span className='blue'>Promode Delivery <br /> Partner!</span>
            </span>
          </Box>

          <SpaceBetween size='m' direction='vertical'>
          <FormField
    errorText=
      {isSubmitted && !errorData.isValid && (
        <>
          {errorData?.number?.message}
        </>
      )}
      >
            <Input 
              value={number} 
              type='number' 
              onChange={(e) => setNumber(e.detail.value)} 
              placeholder='Enter Your Mobile Number' 
              
            />
            </FormField>
            <Button onClick={handleSubmit} variant='primary' fullWidth>
              Sign In
            </Button>
            <Box textAlign='center' variant='p'>
              <span style={{ color: '#1C1C1C66' }}>Don’t have an account? </span>
              <span className='blue pointer' onClick={() => navigate('/auth/register')}>Register</span>
            </Box>
          </SpaceBetween>
        </div>
      </div>
    );
  };

  export default Signin;
