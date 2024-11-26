import { Badge, Box, Button, Container, ContentLayout, Header, SpaceBetween } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Delivered = () => {
    const navigate = useNavigate()
  return (
  <ContentLayout
  disableOverlap
  headerVariant='high-contrast'
 
  >
<Header variant='h3'
actions={
    <Button variant='icon' iconName='refresh'/>
}
>
    <SpaceBetween  size='xxs' direction='horizontal' alignItems='center'>
<Button onClick={()=> navigate(-1)} iconName='arrow-left' variant='icon' />
    <span className='header_underline'>
Delivered orders
    </span>
    </SpaceBetween>
</Header>

{/*  */}

<div style={{marginTop:18}}>

<SpaceBetween direction='vertical' size='l'>
<Container header={
    <Header
    actions={
        <Badge color="green">Delivered</Badge>    
    }
    >
        <span className='blue opacity_minus'>
Maruti S 
        </span>
    </Header>
}


footer={
    <SpaceBetween direction='vertical' size='m'>
    <div className='jcsb flex aic opacity_minus'>
       <Box  variant='strong'>Payment : ₹ <span className='blue'>2980</span></Box>
       <Box variant='strong'>16 Items</Box>
    </div>

    </SpaceBetween>
}
>
    <span className='opacity_minus'>
13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
    </span>
</Container>

<Container header={
    <Header
    actions={
        <Badge color="green">Delivered</Badge>    
    }
    >
        <span className='blue opacity_minus'>
Maruti S 
        </span>
    </Header>
}


footer={
    <SpaceBetween direction='vertical' size='m'>
    <div className='jcsb flex aic opacity_minus'>
       <Box  variant='strong'>Payment : ₹ <span className='blue'>2980</span></Box>
       <Box variant='strong'>16 Items</Box>
    </div>

    </SpaceBetween>
}
>
    <span className='opacity_minus'>
13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
    </span>
</Container>


<Container header={
    <Header
    actions={
        <Badge color="green">Delivered</Badge>    
    }
    >
        <span className='blue opacity_minus'>
Maruti S 
        </span>
    </Header>
}


footer={
    <SpaceBetween direction='vertical' size='m'>
    <div className='jcsb flex aic opacity_minus'>
       <Box  variant='strong'>Payment : ₹ <span className='blue'>2980</span></Box>
       <Box variant='strong'>16 Items</Box>
    </div>

    </SpaceBetween>
}
>
    <span className='opacity_minus'>
13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
    </span>
</Container>

</SpaceBetween>

</div>

  </ContentLayout>
  )
}

export default Delivered