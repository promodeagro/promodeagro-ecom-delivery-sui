import { Badge, Box, Button, Container, ContentLayout, FormField, Header, Modal, RadioGroup, SpaceBetween, Table, Textarea } from '@cloudscape-design/components'
import { Label } from '@mui/icons-material';
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
  const [visible, setVisible] = React.useState(false);

  // reson for canceling the orderz state
  const [reason,setReason ] = React.useState("");

  return (
    <>
      <Header variant='h2'>
        <SpaceBetween size='xs' alignItems='center' direction='horizontal'>
          <Button onClick={() => navigate(-1)} variant='icon' iconName='arrow-left' />
        <span className='header_underline'>   Customer Details </span>  
        </SpaceBetween>
      </Header>


      {/* address */}
      <div style={{marginTop:22}}>
      <Container
        header={
          <Header >
            <SpaceBetween direction='horizontal' size='xs' alignItems='center'>
              <span style={{ color: '#0972D3' }}>  Maruti S </span>
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
      </div>

      <div style={{ marginTop: 10, marginBottom: 12 }}>
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

        <div style={{ marginTop: 12 }}>
          <SpaceBetween direction='vertical' size='xs' >
            <Button onClick={()=> navigate('/app/customer-details/verify-order')} fullWidth variant='primary'>Confirm Order</Button>
            <Button onClick={()=> setVisible(true)} fullWidth >Cancel Order</Button>
          </SpaceBetween>
        </div>
      </Container>
{/* modal for canceling the order */}

<Modal
      onDismiss={() => setVisible(false)}
      
      visible={visible}
    
      header="Items List"
    >
       <RadioGroup
      onChange={({ detail }) => setReason(detail.value)}
      value={reason}
      items={[
        { value: "Requested for reschedule", label: "Requested for reschedule" },
        { value: "Customer no respone", label: "Customer no respone" },
        { value: "Incomplete Address", label: "Incomplete Address" },
        { value: "Security Instability", label: "Security Instability" },
        { value: "Heavy Load", label: "Heavy Load" },
        { value: "Order rejected by customer", label: "Order rejected by customer" }
      ]}
    />

<div style={{marginTop:51}}>
<FormField
      label="Notes Other Issues"
      >
      <Textarea
       placeholder='Write Here Issue!'
       />
    </FormField>
       </div>

       <div style={{marginTop:25}}>
        <SpaceBetween direction='vertical' size='xs'>
          <Button variant='primary' fullWidth >OK</Button>
          <Button onClick={()=> setVisible(false)} fullWidth>Go back</Button>
        </SpaceBetween>
       </div>
    </Modal>
    </>
  )
}

export default CustomerDetails