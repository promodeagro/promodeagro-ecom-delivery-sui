import { Button, Header, Input, Select, SpaceBetween } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BankDetails = () => {
    const navigate = useNavigate()
  return (
    <div 
    style={{height:'100%' , display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}
    // className='onboarding_container'
    >
        {/* wrapper */}
        <span>
<Header 
variant='h1'><span style={{fontSize:'32px' , fontWeight:'600'}}>Bank Details</span>
</Header>  

<div style={{marginTop:23}}></div>

<SpaceBetween direction='vertical' size='m'>
<Select
placeholder='Select Bank'
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
        { label: "Option 4", value: "4" },
        { label: "Option 5", value: "5" }
      ]}
    />

<Input placeholder='Account Number' />
<Input placeholder='Re-Enter Account Number' />
<Input placeholder='Pincode' />
<Input placeholder='IFSC Code' />

</SpaceBetween>
</span>

<div style={{marginBottom:30}}>
<Button onClick={()=> navigate('/auth/register/documents')} variant='primary' fullWidth>Complete</Button>
</div>

    </div>
  )
}

export default BankDetails