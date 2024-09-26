import { Button, Modal } from '@cloudscape-design/components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import onion from "../../../../Assets/Images/onion.png"

const VerifiedOrder = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = React.useState(false);

  const [isCaptured, setIsCaptured] = useState(false)

  const handleTakePhoto = () => {

    setIsCaptured(true)
    // setVisible(true)
  }
  return (
    <>
    <div  style={{display:'flex',  position:'absolute', top:0,left:0,right:0, bottom:0, justifyContent:'center' , alignItems:'center' , height:'100%' , flexDirection:'column'}}>
    
<div style={{height:'88vh' ,width:'100%'}}>
<img style={{width:'100%' , height:'100%' , position:'absolute' , left:0 , top:0}}  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1wMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAXEAEBAQEAAAAAAAAAAAAAAAAAARFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDECgAAAAAAAqAAoiooKIKlEIqKgACioAAKBwBAAEFQAADRQEBRUFQFAQAAAAQVKIogooCAAoACioqIiKKIKgCooIAiqioAAAqKAAAUAQVFQAQAAUBQARQABFAEBUAEUAAAAABRFAAA4igIGCgoIgiigAigAAACKgAAAAAAAAAAgqAqgAAACAKAAAAIqoAIoAAioAAIACgAgAAACiKKAAIoCKAKIAIooAAAIAAIKgAAgAAAAAoAAoCKAAAAAAAqiAIAAACgiogAKgAAAgAAAAKhBRQAAAAAVBRUBAAARQEAVAAAAAAABFBUUAwRFAFAAFAEAUAAABBAAAAAAAQAFBQRQAAAAAQUBQAH/9k=" alt="ssss" />
</div>

<div className='flex jcc aic' style={{width:'100%',gap:20 ,flexDirection:'column', height:'16vh' , position:'absolute' , bottom:0, background:"#000716"}}>
  <Button onClick={handleTakePhoto} variant='inline-link' fullWidth>
    <span style={{color:'#EAD72F'}}>
    TAKE A PHOTO
    </span>
    </Button>
    <Button   disabled={!isCaptured} fullWidth  variant='primary' onClick={()=> navigate('/app/customer-details/captured-verified')}>
      Verified
      </Button>
</div>
    </div>

{/* succedc modal */}

    <Modal
    removeModalRoot
      onDismiss={() => setVisible(false)}
      visible={visible}
     
      header="Modal title"
    >
      Your description should go here
    </Modal>

    </>
  )
}

export default VerifiedOrder