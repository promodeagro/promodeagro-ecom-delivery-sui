import { Badge, Box, Button, Container, Header, SpaceBetween, StatusIndicator } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CapturedVerified = () => {
    const navigate = useNavigate()
  return (
   <>
   <Header variant='h2'>
    <SpaceBetween size='xs'direction='horizontal' alignItems='center'>
<Button onClick={()=> navigate(-2)} iconName='arrow-left' variant='icon'/>
<span className='header_underline'> Captured Verified </span>  
    </SpaceBetween>
</Header>   

<div style={{marginTop:18}}>


<Container
            header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{ color: '#0972D3' }}>Maruti S</span></Box> <Badge>COD</Badge> </SpaceBetween>}
            footer={<Button variant='primary' iconName='call' fullWidth>Call</Button>}
          >
          13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
          </Container>
          </div>

          <div style={{marginTop:18 , marginBottom:18}}>
<SpaceBetween size='xs' direction='horizontal' alignItems='center'>
<Box variant='h4'>Items list </Box>          
<Box> (16 Items)</Box>
</SpaceBetween>
</div>
<Container
header={
    <Header variant='h4'>
        Order ID : 54764
    </Header>
}
footer={
    <div className='flex jcc'>
        <StatusIndicator>Verified!</StatusIndicator>
    </div>
}
>
    <SpaceBetween direction='horizontal' size='xs'>
    Amount to be Collect : <Box variant='strong'>₹ 2980/-</Box>
    </SpaceBetween>
</Container>


<div style={{marginTop:"40%"}}>
    <Button onClick={()=> navigate('/app/customer-details/captured-verified/payment')} variant='primary' fullWidth>
    Collect Amount
    </Button>
</div>
   </>
  )
}

export default CapturedVerified