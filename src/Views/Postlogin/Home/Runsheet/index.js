import { Badge, Box, Button, Container, Header, SpaceBetween, TextFilter } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Runsheet = () => {
    const navigate = useNavigate()
  return (
   <>
   <Header actions={<Button variant='icon' iconName='refresh'/>}>
   Runsheet (5425)
   </Header>

<div style={{marginTop:10 , marginBottom:18}} className="home_custom_box_wrapper">
    <div style={{background:'#4F5A68'}} className="runsheet_box">
      <span className="runsheet_box_value">
      02
      </span> 
      <span className="runsheet_box_label">
      Pending
      </span>
    </div>
    <div style={{background:'#037F0C'}} className="runsheet_box">
    <span className="runsheet_box_value">
      06
      </span> 
      <span className="runsheet_box_label">
      Delivered
      </span>
    </div>
    <div style={{background:'#D91515'}} className="runsheet_box">
    <span className="runsheet_box_value">
      01
      </span> 
      <span className="runsheet_box_label">
      Undelivered
      </span>
    </div>
</div>

<TextFilter filteringPlaceholder='Search'/>

<span style={{marginTop:18 , marginBottom:18}}>
<Box variant='h4'>
All Shipment (10)
</Box>
</span>

<SpaceBetween direction='vertical' size='l'>
    <span style={{cursor:'pointer'}} onClick={()=> navigate('/app/customer-details')}>
<Container
header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{color:'#0972D3'}}>Maruti S</span></Box> <Badge>COD</Badge> </SpaceBetween>}
footer={<SpaceBetween alignItems='center' direction='horizontal' size='xs'> 
<Box variant='h5'>Payment : ₹ 2980</Box> 
<Box variant='h5'>16 Items</Box> 
</SpaceBetween>}
>
13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
</Container>
</span>
<Container
header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{color:'#0972D3'}}>Maruti S</span></Box> <Badge>COD</Badge> </SpaceBetween>}
footer={<SpaceBetween alignItems='center' direction='horizontal' size='xs'> 
<Box variant='h5'>Payment : ₹ 2980</Box> 
<Box variant='h5'>16 Items</Box> 
</SpaceBetween>}
>
13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
</Container>

<Container
header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{color:'#0972D3'}}>Maruti S</span></Box> <Badge>COD</Badge> </SpaceBetween>}
footer={<SpaceBetween alignItems='center' direction='horizontal' size='xs'> 
<Box variant='h5'>Payment : ₹ 2980</Box> 
<Box variant='h5'>16 Items</Box> 
</SpaceBetween>}
>
13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
</Container>

<Container
header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{color:'#0972D3'}}>Maruti S</span></Box> <Badge>COD</Badge> </SpaceBetween>}
footer={<SpaceBetween alignItems='center' direction='horizontal' size='xs'> 
<Box variant='h5'>Payment : ₹ 2980</Box> 
<Box variant='h5'>16 Items</Box> 
</SpaceBetween>}
>
13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
</Container>
</SpaceBetween>


   </>
  )
}

export default Runsheet