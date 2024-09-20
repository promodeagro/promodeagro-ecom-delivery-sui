import { Button } from '@cloudscape-design/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const VerifiedOrder = () => {
  const navigate = useNavigate()
  return (
    <div  style={{display:'flex' , justifyContent:'center' , alignItems:'center' , height:'100%' , flexDirection:'column'}}>
      <h3>page will add soon</h3>

      <Button variant='primary' onClick={()=> navigate('/app/customer-details/captured-verified')}>
      Verified
      </Button>
    </div>
  )
}

export default VerifiedOrder