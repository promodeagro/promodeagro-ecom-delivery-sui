import { Box, Button, Container, Header, SpaceBetween } from '@cloudscape-design/components'
import React from 'react'
import {  useNavigate } from 'react-router-dom';

const AmountSummary = () => {
  const navigate = useNavigate();

  return (
   <>
     <Header variant="h3">
       <SpaceBetween direction='horizontal' size='xs' alignItems='center'>
        <Button onClick={()=> navigate(-1)} iconName='arrow-left' variant='icon'></Button>
        <span className='header_underline'>Amount Summary </span>
        </SpaceBetween> 
      </Header>


      <SpaceBetween direction='vertical' size='l'>
<Container
header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{color:'#0972D3'}}>Run Sheet</span> - 5425</Box>  </SpaceBetween>}
footer={<div style={{display:'flex' , alignItems:'center' , justifyContent:"space-between"}}> 
<Box variant='p'>Cash to be collected</Box> 
<Box variant='strong'>₹ 15980</Box> 
</div>}
>
  <SpaceBetween size='l' direction='vertical'>
<div className="custom_box">
  <span className="custom_box_label">Pending Order</span>
  <span className="custom_box_value">
  02
  </span>
</div>

<div style={{background:'#037F0C'}} className="custom_box">
  <span className="custom_box_label">Delivered Order</span>
  <span className="custom_box_value">
  02
  </span>
</div>

<div style={{background:'#D91515'}} className="custom_box">
  <span className="custom_box_label">Undelivered Order</span>
  <span className="custom_box_value">
  02
  </span>
</div>
</SpaceBetween>
</Container>


</SpaceBetween>
   
   </>
  )
}

export default AmountSummary