import { Box, Button, Container, Header, Icon, SpaceBetween } from '@cloudscape-design/components'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PackIcon from "../../../Assets/Images/PackIcon.svg"

import { useDispatch, useSelector } from "react-redux";
import { fetchRunsheets } from 'Redux-Store/Runsheets/RunsheetThunk';
import status from 'Redux-Store/Constants';
import loginDetails  from 'Utils/helperFunctions';


const Home = () => {
  const loginDetails = localStorage.getItem("login");
  const [runsheets,setRunsheets] = useState([])
  const [acceptRunSheet,setAcceptRunSheet] = useState(false)
  
  const navigate = useNavigate()

const handleSub = () => {
  const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkNmYxOGI4LWI0MGQtNGZlNC05MjFhLTY1NWE1YzY0NjYxZiIsIm51bWJlciI6Ijg4ODY4MzQyMTkiLCJpYXQiOjE3Mjk2ODUzNjIsImV4cCI6MTcyOTc3MTc2MiwiaXNzIjoiaHR0cHM6Ly93d3cucmlkZXIucHJvbW9kZWFncm8uY29tLyIsInN1YiI6ImFkNmYxOGI4LWI0MGQtNGZlNC05MjFhLTY1NWE1YzY0NjYxZiJ9.giQ_Hmnu2H1fvX3D3kJi84Ra-r38fSU4z2NH17ShjLs");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://hru1nl9r81.execute-api.ap-south-1.amazonaws.com/rider/ad6f18b8-b40d-4fe4-921a-655a5c64661f/runsheet", requestOptions)
  .then((response) => response.text())
  .then((result) =>setRunsheets(JSON.parse(result)) )
  .catch((error) => console.error(error));
}
// console.log(runsheets)
handleSub()
  return (
   <>
<Header variant='h3' actions={  <Button iconName='refresh' variant='icon'/>}>
<span className='header_underline'>Home</span>  
</Header>   
<div style={{marginTop:12}}>
<SpaceBetween  direction='vertical' size='m'>
{/* 

{runsheets.map(runsheet => (
    <div key={runsheet.id}>
        */}
<Container
header={
  <Header
  description={
    <SpaceBetween>


    <Box variant='h4' >

      <SpaceBetween direction='horizontal' size='xs' alignItems='center'>
    <img src={PackIcon} alt="" width={20} height={20}/>
     <span style={{color:'#037F0C'}}>12 Orders</span> 
      </SpaceBetween>
     </Box>
    </SpaceBetween>
  }
  ><span style={{color:'#0972D3'}}> Run Sheet</span> - 5425</Header>
}

footer={
<Box>
<SpaceBetween direction='vertical' size='l'>
Cash to be Collect : ₹ 12300/-




{acceptRunSheet ?
  <Button onClick={()=> navigate('/app/home/runsheet')} fullWidth variant='primary'>Continue</Button>
 :
<Button onClick={()=> setAcceptRunSheet(true)} fullWidth variant='primary'>Accept Runsheet</Button> 
 }


</SpaceBetween>
</Box>
}
>
<SpaceBetween>
  <div className="home_custom_box_wrapper">
  <div className="custom_box">
    <span className="custom_box_label">
    Pending Order
    </span>
    <span className="custom_box_value">
    10
    </span>
  </div>
  <div style={{background:'#037F0C'}} className="custom_box">
  <span className="custom_box_label">
  Delivered Order
    </span>
    <span className="custom_box_value">
    06
    </span>
  </div>
  </div>
</SpaceBetween>
</Container>

<Container
header={
  <Header
  description={
    <SpaceBetween>


    <Box variant='h4' >

      <SpaceBetween direction='horizontal' size='xs' alignItems='center'>
    <img src={PackIcon} alt="" width={20} height={20}/>
     <span style={{color:'#037F0C'}}>12 Orders</span> 
      </SpaceBetween>
     </Box>
    </SpaceBetween>
  }
  ><span style={{color:'#0972D3'}}> Run Sheet</span> - 5425</Header>
}

footer={
<Box>
<SpaceBetween direction='vertical' size='l'>
Cash to be Collect : ₹ 12300/-




{acceptRunSheet ?
  <Button onClick={()=> navigate('/app/home/runsheet')} fullWidth variant='primary'>Continue</Button>
 :
<Button onClick={()=> setAcceptRunSheet(true)} fullWidth variant='primary'>Accept Runsheet</Button> 
 }


</SpaceBetween>
</Box>
}
>
<SpaceBetween>
  <div className="home_custom_box_wrapper">
  <div className="custom_box">
    <span className="custom_box_label">
    Pending Order
    </span>
    <span className="custom_box_value">
    10
    </span>
  </div>
  <div style={{background:'#037F0C'}} className="custom_box">
  <span className="custom_box_label">
  Delivered Order
    </span>
    <span className="custom_box_value">
    06
    </span>
  </div>
  </div>
</SpaceBetween>
</Container>
    {/* </div> */}
{/* ))} */}


</SpaceBetween>
</div>
   </>
  )
}

export default Home