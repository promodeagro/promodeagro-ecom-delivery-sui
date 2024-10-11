import React, { useState } from 'react'
import vector from "../../Assets/Images/Vector.png"
import PTRLogo from "../../Assets/Images/PTRLogo.png"
import scooterImg from "../../Assets/Images/scooterImg.png"
import { Box, Button, Container, FormField, Input, SpaceBetween } from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
  const navigate = useNavigate()
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
  return (
   <div className='flex jcsb flex-col' style={{height:'100%' , width:'100%'}}>
{/* top stratz */}
<div>
    <div style={{marginTop:20}} className='flex jcc acc'>
    <img style={{width:'123px' , margin:'auto'}} src={PTRLogo} alt="" />
    </div>

<div style={{marginTop:60}} className='flex jcc acc'>
<img style={{width:'230px'}} src={scooterImg} alt="" />
</div>
</div>
{/* top Endz */}


{/* botom  starts */}
<div className='flex flex-col' style={{gap:10}}>
<Box variant='h1'>
  <span style={{fontSize:'32px' , fontWeight:'600' , lineHeight:'35px'}}>
Hello, <br /> <span className='blue'>Promode Delivery <br /> Partner!</span></span>
</Box>

<SpaceBetween size='m' direction='vertical'>
<Input placeholder='Enter Your Mobile Number'/>
<Button onClick={()=> navigate('/app/home')} variant='primary' fullWidth>Sign In</Button>
<Box textAlign='center' variant='p'>
  <span style={{color:'#1C1C1C66'}}>Don’t have an account ? </span> <span className='blue pointer' onClick={()=> navigate('/auth/register')}>Register</span> </Box>
</SpaceBetween>
</div>
{/* botom  Endzz */}


   </div>
  )
}

export default Signin