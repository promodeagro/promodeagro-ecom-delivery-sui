import { Box,KeyValuePairs, Button, Header,Link ,Container,SpaceBetween,FormField ,Input, Wizard} from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [
    activeStepIndex,
    setActiveStepIndex
  ] = React.useState(0);
    const navigate = useNavigate()
  return (
   <div className='onboarding_container' >
<Header 
description={<>Complete your <span className='highlight'> 4 Step Verification</span> to Register Promode Delivery Partner</>}
variant='h1'><span style={{fontSize:'32px' , fontWeight:'600'}}>Register</span>
</Header>   


<Wizard
      i18nStrings={{
        stepNumberLabel: stepNumber =>
          `Step ${stepNumber}`,
        collapsedStepsLabel: (stepNumber, stepsCount) =>
          `Step ${stepNumber} of ${stepsCount}`,
       
      }}
      onNavigate={({ detail }) =>
        setActiveStepIndex(detail.requestedStepIndex)
      }
      activeStepIndex={activeStepIndex}
      allowSkipTo
      steps={[
        {
          title: "Personal Details",
          info: <Link variant="info">Info</Link>,
        },
        {
          title: "Bank Details",
        
          isOptional: true
        },
        {
          title: "Documents",
        
        },
        {
          title: "Review and Submit",
        
        }
      ]}
    />


<Button onClick={()=> navigate('/auth/register/profile-details')} variant='link'>Profile details</Button>

<Button fullWidth variant='primary' disabled>Submit</Button>
   </div>


  )
}

export default Register