import { Badge, Box, Button, Container, ContentLayout, Header, SpaceBetween, Table } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navigate } from 'Utils/helperFunctions'

const productData = [
    {
      image: '🥔', // Replace with the actual image source if needed
      name: 'Potato',
      quantity: '10 Kgs',
      price: 250
    },
    {
      image: '🍅',
      name: 'Tomato',
      quantity: '05 Pcs',
      price: 250
    },
    {
      image: '🥕',
      name: 'Carrot',
      quantity: '250 Grm',
      price: 250
    },
    {
      image: '🥒',
      name: 'Cucumber',
      quantity: '10 Kgs',
      price: 250
    },
    // Add more rows if needed
  ];
  
const CustomerDetails = () => {
const navigate = useNavigate()
  return (
 <>
 <Header variant='h3'>
        <SpaceBetween size='s' alignItems='center' direction='horizontal'>
            <Button onClick={()=> navigate(-1)} variant='icon' iconName='arrow-left' /> 
Customer Details
    </SpaceBetween>
    </Header>

{/* address */}
<Container

header={
    <Header >
        <SpaceBetween direction='horizontal' size='xs' alignItems='center'>
      <span style={{color:'#0972D3'}}>  Maruti S </span>
        <Badge>COD</Badge>
        </SpaceBetween>
    </Header>
}
footer={
  <Button
  onClick={() => window.location.href = 'tel:+918886834219'}
  fullWidth variant='primary' iconName='call'>
    Call
    </Button>
}
>
13-54-854/4A/B1,B-Block Jains Bandlaguda,
Prestige High Fields, Madhapur, 
Telangana 500038
</Container>

<div style={{marginTop:8 , marginBottom:3}}>
<Header variant='h3'>    
    <SpaceBetween direction='horizontal' size='xs' alignItems='center' >
Items list <Box variant='p'>(16 Items)</Box>
    </SpaceBetween>
</Header>
</div>


<Container
header={
    <Header
    description=""
    >
        Order ID : 54764
    </Header>
}
>
<Table

        columnDefinitions={[
          {
            id: 'products',
            header: 'Products',
            cell: (item) => (
              <SpaceBetween size="xxs" direction="horizontal">
                <span>{item.image}</span> {/* Placeholder for the image */}
                <span>{item.name}</span>
              </SpaceBetween>
            )
          },
          {
            id: 'quantity',
            header: 'Qty',
            cell: (item) => item.quantity
          },
          {
            id: 'price',
            header: 'Price',
            cell: (item) => item.price
          }
        ]}
        items={productData}
        variant="embedded"
        stickyHeader={true}
        
      />
</Container>

 </>
  )
}

export default CustomerDetails