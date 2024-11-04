import { Box,KeyValuePairs, Button, Header,Link ,Container,SpaceBetween,FormField ,Input, Wizard} from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [
    activeStepIndex,
    setActiveStepIndex
  ] = React.useState(0);
    const navigate = useNavigate()
  return (
    <div style={{width:"100%" , height:"100%" }}>

      {/* Header Top */}
      <div style={{marginTop:'20px'}}>
<Header 
description={<>Complete your <span className='highlight'> 4 Step Verification</span> to Register Promode Delivery Partner</>}
variant='h1'><span style={{fontSize:'32px' , fontWeight:'600'}}>Register</span>
</Header>   
</div>


<div style={{display:"flex" , flexDirection:'column'}}>

<Button onClick={()=> navigate('/auth/register/profile-details')} variant='link'>Profile details</Button>
<Button onClick={()=> navigate('/auth/register/profile-details')} variant='link'>Bank details</Button>
<Button onClick={()=> navigate('/auth/register/profile-details')} variant='link'>Documents details</Button>
<Button onClick={()=> navigate('/auth/register/profile-details')} variant='link'>Profile details</Button>

</div>



{/* Bottom */}
<div style={{position:'absolute' ,right:30 ,bottom:"10%" , left:30}}>
<Button fullWidth variant='primary' disabled>Submit</Button>
</div>




   </div>


  )
}

export default Register