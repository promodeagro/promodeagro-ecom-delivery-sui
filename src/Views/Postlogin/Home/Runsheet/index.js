import { Badge, Box, Button, Container, Header, Select, SpaceBetween, TextFilter } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Runsheet = () => {
  const navigate = useNavigate()

  const [
    selectedOption,
    setSelectedOption
  ] = React.useState({ label: "Runsheet (5425)", value: "Runsheet (5425)" });
  return (
    <>
      <Header variant='h2' actions={<Button variant='icon' iconName='refresh' />}>
        <Select
          selectedOption={selectedOption}
          onChange={({ detail }) =>
            setSelectedOption(detail.selectedOption)
          }
          options={[
            { label: "Runsheet (2325)", value: "Runsheet (2325)" },
            { label: "Runsheet (2325)", value: "Runsheet (2325)" },
           
          ]}
        />
      </Header>

      <div  style={{ marginTop: 10, marginBottom: 18 }} className="home_custom_box_wrapper pointer">
        <div style={{ background: '#4F5A68' }} className="runsheet_box">
          <span className="runsheet_box_value">
            02
          </span>
          <span className="runsheet_box_label">
            Pending
          </span>
        </div>
        <div onClick={() => navigate('/app/home/runsheet/delivered')} style={{ background: '#037F0C' }} className="runsheet_box pointer">
          <span className="runsheet_box_value">
            06
          </span>
          <span className="runsheet_box_label">
            Delivered
          </span>
        </div>
        <div onClick={() => navigate('/app/home/runsheet/undelivered')} style={{ background: '#D91515' }} className="runsheet_box pointer">
          <span className="runsheet_box_value">
            01
          </span>
          <span className="runsheet_box_label">
            Undelivered
          </span>
        </div>
      </div>

      <span>
        <TextFilter filteringPlaceholder='Search' />
      </span>

      <div style={{ marginTop: 18,  marginBottom: 18 }}>
        <Box variant='h4'>
          <span className='gray_underline'>
            All Shipment (10)
          </span>
        </Box>
      </div>

      <SpaceBetween direction='vertical' size='l'>
        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/app/customer-details')}>
          <Container
            header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{ color: '#0972D3' }}>Maruti S</span></Box> <Badge>COD</Badge> </SpaceBetween>}
            footer={<div className='flex jcsb aic'>
              <Box variant='h5'>Payment :  <span className='blue'> ₹ 2980 </span></Box>
              <Box variant='h5'>16 Items</Box>
            </div>}
          >
            13-54-854/4A/B1,B-Block Jains Bandlaguda,
            Prestige High Fields, Madhapur,
            Telangana 500038
          </Container>
        </span>


        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/app/customer-details')}>
          <Container
            header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{ color: '#0972D3' }}>Maruti S</span></Box> <Badge color='green'>Prepaid</Badge> </SpaceBetween>}
            footer={<div className='flex jcsb aic'>
              <Box variant='h5'>Payment :  <span className='blue'> ₹ 2980 </span></Box>
              <Box variant='h5'>16 Items</Box>
            </div>}
          >
            13-54-854/4A/B1,B-Block Jains Bandlaguda,
            Prestige High Fields, Madhapur,
            Telangana 500038
          </Container>
        </span>

        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/app/customer-details')}>
          <Container
            header={<SpaceBetween alignItems='center' direction='horizontal' size='xs'><Box variant='h3'><span style={{ color: '#0972D3' }}>Maruti S</span></Box> <Badge color='green'>Prepaid</Badge> </SpaceBetween>}
            footer={<div className='flex jcsb aic'>
              <Box variant='h5'>Payment :  <span className='blue'> ₹ 2980 </span></Box>
              <Box variant='h5'>16 Items</Box>
            </div>}
          >
            13-54-854/4A/B1,B-Block Jains Bandlaguda,
            Prestige High Fields, Madhapur,
            Telangana 500038
          </Container>
        </span>
       
      </SpaceBetween>

    </>
  )
}

export default Runsheet