import { Box, Button, Container, Header, Icon, SpaceBetween } from '@cloudscape-design/components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const [acceptRunSheet,setAcceptRunSheet] = useState(false)
  return (
   <>
<Header variant='h2' actions={  <Button iconName='refresh' variant='icon'/>}>
<span className='header_underline'> Home </span>  
</Header>   

<div style={{marginTop:12}}>
<SpaceBetween  direction='vertical' size='m'>

<Container
header={
  <Header
  description={
    <SpaceBetween>


    <Box variant='h4' >
     <span style={{color:'#037F0C'}}>10 Orders</span> </Box>
    </SpaceBetween>
  }
  ><span style={{color:'#0972D3'}}> Run Sheet</span> - 5425</Header>
}

footer={
<Box>
<SpaceBetween direction='vertical' size='l'>
Cash to be Collect : ₹ 15980/-




{acceptRunSheet ?
  <Button onClick={()=> navigate('/app/home/runsheet')} fullWidth variant='primary'>Continue</Button>
 :
<Button onClick={()=> setAcceptRunSheet(true)} fullWidth variant='primary'>Accept Runsheet</Button> 
 }


</SpaceBetween>
</Box>
}
>
<SpaceBetween>
  <div className="home_custom_box_wrapper">
  <div className="custom_box">
    <span className="custom_box_label">
    Pending Order
    </span>
    <span className="custom_box_value">
    10
    </span>
  </div>
  <div style={{background:'#037F0C'}} className="custom_box">
  <span className="custom_box_label">
  Delivered Order
    </span>
    <span className="custom_box_value">
    06
    </span>
  </div>
  </div>
</SpaceBetween>
</Container>
<Container
header={
  <Header
  description={
    <SpaceBetween>
    <Box variant='h4' >
     <span style={{color:'#037F0C'}}>10 Orders</span> </Box>
    </SpaceBetween>
  }
  ><span style={{color:'#0972D3'}}> Run Sheet</span> - 5425</Header>
}

footer={
<Box>
<SpaceBetween direction='vertical' size='l'>
Cash to be Collect : ₹ 15980/-




{acceptRunSheet ?
  <Button onClick={()=> navigate('/app/home/runsheet')} fullWidth variant='primary'>Continue</Button>
 :
<Button onClick={()=> setAcceptRunSheet(true)} fullWidth variant='primary'>Accept Runsheet</Button> 
 }


</SpaceBetween>
</Box>
}
>
<SpaceBetween>
  <div className="home_custom_box_wrapper">
  <div className="custom_box">
    <span className="custom_box_label">
    Pending Order
    </span>
    <span className="custom_box_value">
    10
    </span>
  </div>
  <div style={{background:'#037F0C'}} className="custom_box">
  <span className="custom_box_label">
  Delivered Order
    </span>
    <span className="custom_box_value">
    06
    </span>
  </div>
  </div>
</SpaceBetween>
</Container>
</SpaceBetween>
</div>
   </>
  )
}

export default Home