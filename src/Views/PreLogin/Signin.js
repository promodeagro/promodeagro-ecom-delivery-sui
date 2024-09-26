import React, { useState } from 'react'
import vector from "../../Assets/Images/Vector.png"
import PTRLogo from "../../Assets/Images/PTRLogo.png"
import { Box, Button, Container, FormField, Input, SpaceBetween } from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
  const navigate = useNavigate()
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
  return (
    <div className='login_page'>
      <img src={PTRLogo} alt="" />
      <img className='login_page_vector' src={vector} alt="" />

      <form>
        <Container
          header={
            <SpaceBetween direction='vertical' alignItems='center'>
              <Box variant='h1'>Welcome</Box>
              <Box variant='small'>Login to your account</Box>
            </SpaceBetween>
          }
        >
          <SpaceBetween direction="vertical" size="xs">
            <FormField label="Email">
              <Input value={email} onChange={(e)=> setEmail(e.detail.value)} placeholder='Enter Your Email' />
            </FormField>
            <FormField label="Password">
              <Input value={password} onChange={(e)=> setPassword(e.detail.value)} type='password'  placeholder='Enter Your Password' />
            </FormField>
            <Box float='right'>
              <Button variant="inline-link" onClick={() => navigate("/auth/forgot-password")}>
                Forgot Password
              </Button>
            </Box>
            <Button variant='primary' onClick={() => navigate("/app/Home")} fullWidth>Login</Button>
          </SpaceBetween>

        </Container>
      </form>
    </div>
  )
}

export default Signin