import React, { useState } from 'react'
import vector from "../../Assets/Images/Vector.png"
import PTRLogo from "../../Assets/Images/PTRLogo.png"
import { Box,Button, Container, FormField, Input, SpaceBetween } from '@cloudscape-design/components'
const ForgotPassword = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e)=> {

    }
  return (
    <div className='login_page'>
      <img src={PTRLogo} alt="" />
      <img className='login_page_vector' src={vector} alt="" />

     <form onSubmit={handleSubmit}>
      <Container
      header={
          <SpaceBetween direction='vertical' alignItems='center'>
        <Box variant='h1'>Forget Your Password</Box>
        <Box textAlign='center'  variant='small'>Enter your email to proceed with the password reset. </Box>
      </SpaceBetween>
      }
      >
          <SpaceBetween direction="vertical" size="xs">
            <FormField errorText="" label="Enter New Password">
              <Input value={password} onChange={(e)=> setPassword(e.detail.value)} type='password' placeholder='Enter New Password' />
            </FormField>
        
            <Button  variant='primary' fullWidth>Send OTP</Button>
            <Button variant='link' fullWidth>Or Login</Button>
          </SpaceBetween>
      </Container>
          </form>
    </div>
  )
}

export default ForgotPassword