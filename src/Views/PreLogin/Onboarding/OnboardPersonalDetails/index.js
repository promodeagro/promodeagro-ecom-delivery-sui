import { Button, DatePicker, FormField, Header, Input, Select, SpaceBetween } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OnboardPersonalDetails = () => {
  const navigate = useNavigate()
  return (
    <div 
    // className='onboarding_container'
    >
<Header 
variant='h1'><span style={{fontSize:'32px' , fontWeight:'600'}}>Personal Details</span>
</Header>  

<div style={{marginTop:23}}></div>
<SpaceBetween direction='vertical' size='l'>
{/* name and details */}
<SpaceBetween direction='vertical' size='m'>
              <Input placeholder='Full Name' />
              <DatePicker 
        placeholder="YYYY/MM/DD"
      />
              <Input placeholder='Mobile Number' />
              <Input placeholder='Email ID' />


</SpaceBetween>

{/* Addresss */}
<FormField 
      label="Address"
>
<SpaceBetween size='m' direction='vertical'>
<Input placeholder='Address Line 01' />
<Input placeholder='Address Line 02' />
<Input placeholder='Landmark' />

<Select
placeholder='Select State'
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
        { label: "Option 4", value: "4" },
        { label: "Option 5", value: "5" }
      ]}
    />

<Select
placeholder='Select City'
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
        { label: "Option 4", value: "4" },
        { label: "Option 5", value: "5" }
      ]}
    />

<Input placeholder='Pincode' />


</SpaceBetween>

</FormField>

{/* Reference Contact */}

<FormField 
      label="Reference Contact"
>
<SpaceBetween size='m' direction='vertical'>
<Select
placeholder='Relation'
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
        { label: "Option 4", value: "4" },
        { label: "Option 5", value: "5" }
      ]}
    />

<Input placeholder='Mobile Number' />

</SpaceBetween>
</FormField>

<Button onClick={()=> navigate('/auth/register/bank-details')} variant='primary' fullWidth >Complete</Button>
</SpaceBetween>


    </div>
  )
}

export default OnboardPersonalDetails