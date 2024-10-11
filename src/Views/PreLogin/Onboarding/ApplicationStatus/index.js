import React from 'react'

import ApplicationStatusImg from "../../../../Assets/Images/ApplicationStatus.png"
import { Box, Button, SpaceBetween } from '@cloudscape-design/components'
import { useNavigate } from 'react-router-dom'
const ApplicationStatus = () => {
    const navigate = useNavigate()
  return (
    <div style={{height:'100%' , flexDirection:'column' , display:'flex' ,alignItems:'center', justifyContent:'space-between'}}>

     <div style={{paddingTop:94}}>  
       <SpaceBetween direction='vertical' size='s'>
       <img src={ApplicationStatusImg} alt="" />
<Box textAlign='center' variant='h1'>Application Status</Box>
<Box textAlign='center'  variant='p'>Your account is under verification <br /> will update once its verified </Box>
       </SpaceBetween>
       </div>

      
        <Button onClick={()=> navigate('/auth/signin')} variant='primary' fullWidth>Go to Sign In</Button>
      
        
        </div>
  )
}

export default ApplicationStatus