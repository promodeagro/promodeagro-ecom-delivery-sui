import { Button, FormField, Header, Input, SpaceBetween } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReviewAndSubmit = () => {
  const navigate = useNavigate()
  return (
    <div 
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
 <Header variant='h1'>
                    <span style={{ fontSize: '32px', fontWeight: '600' }}>Review & Submit</span>
                </Header>


<div style={{marginTop:12}}>
<SpaceBetween direction='vertical' size='l'>

{/* persnal details */}
<FormField label={<span style={{display:'flex' ,alignItems:'center', justifyContent:'space-between'}}
>Personal Details <Button variant='link'>Edit</Button></span>}>
<SpaceBetween size='m' direction='vertical'>

<Input  disabled placeholder='Salman Bin Moosa'/>
<Input disabled placeholder='30/05/1998'/>
<Input disabled placeholder='8886834219'/>
<Input disabled placeholder='salmanbinmoosa@gmail.com'/>
<Input disabled placeholder='Alkapur'/>
<Input disabled placeholder='Alkapur Neknampur'/>
<Input disabled placeholder='Zeeshan Hotel'/>
<Input disabled placeholder='Telangana'/>
<Input disabled placeholder='Hyderabad'/>
<Input disabled placeholder='500081'/>
<Input disabled placeholder='Yahiya Aly Khan'/>
<Input disabled placeholder='9392020089'/>

</SpaceBetween>
</FormField>

{/* Bank Details */}
<FormField label={<span style={{display:'flex' ,alignItems:'center', justifyContent:'space-between'}}
>Bank Details <Button variant='link'>Edit</Button></span>}>
<SpaceBetween size='m' direction='vertical'>
<Input disabled placeholder='HDFC BANK'/>
<Input disabled placeholder='100500459883'/>
<Input disabled placeholder='HDFC00003881'/>
</SpaceBetween>
</FormField>


{/* Bank Details */}
<FormField label="Documents">
<SpaceBetween size='m' direction='vertical'>
<Input disabled placeholder='HDFC BANK'/>
<Input disabled placeholder='100500459883'/>
<Input disabled placeholder='HDFC00003881'/>

<Button onClick={()=> navigate('/auth/register/application-status')} variant='primary' fullWidth>Submit</Button>
</SpaceBetween>
</FormField>

</SpaceBetween>


</div>










        </div>
  )
}

export default ReviewAndSubmit