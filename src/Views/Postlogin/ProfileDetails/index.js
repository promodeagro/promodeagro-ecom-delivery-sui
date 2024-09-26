import { Box, Button, Container, Form, FormField, Header, Icon, Input, SpaceBetween } from '@cloudscape-design/components'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'Redux-Store/Users/UsersThunk';

const ProfileDetails = () => {

  
  const navigate = useNavigate();

  // have to change these value after getting api's 
  const [username, setUsername] = useState("salmanbinmoosa")
  const [email, setEmail] = useState("salmanbinmosa@gmail.com")
  const [password, setPassword] = useState("")
  
  // handle form state
  const [formEdit, setFormEdit] = useState(false)
  

  const handleForm = (e) =>{
    e.preventDefault()

  }


// fetching dami users for redux 
const users = useSelector((state) => state.users.users);


const dispatch = useDispatch();
console.log("pro", users);
const { data = [], status } = users;
console.log("data", data);
useEffect(() => {
  dispatch(fetchUsers());
}, []);




  return (
   <>
   <Header variant='h3'>
    <SpaceBetween size='xs' direction='horizontal' alignItems='center' >
      <Button onClick={()=>navigate(-1)} iconName='arrow-left' variant='icon'/>
        <span className='header_underline'>
        Profile Details
        </span>
      </SpaceBetween>
   </Header>


   <form style={{marginTop:18}} onSubmit={handleForm}>
          <SpaceBetween  direction="vertical" size="l">
          <Box
          >
            <div 
            style={{
              width:"100px" ,
              height:"100px" ,
              borderRadius:"50%" ,
              display:"flex" ,
              border:"1px solid #D9D9D9",
              alignItems:"center" ,
              justifyContent:"center",
              margin:"0 auto"
            }}
            >
        <Icon variant='disabled' name="user-profile" size="large" />
        </div>
      </Box>
            <FormField label="User Name">
            <Input  onChange={(e) => setUsername(e.detail.value)} value={username}  />
            </FormField>
            <FormField label="Email">
              <Input  onChange={(e) => setEmail(e.detail.value)} value={email} type='email' />
            </FormField>
            <FormField  label="Password">
              <Input onChange={(e)=> setPassword(e.detail.value)} value={password} type='password' placeholder='**********' />
            </FormField>
            {formEdit ? (
              <>
          {/* // If formEdit is true, render the "Update" button */}
          <Button fullWidth variant='primary'>Update</Button>
          <Button onClick={()=> setFormEdit(true)} fullWidth variant='inline-link'>Cancel</Button>
          </>
        ) : (
          // If formEdit is false, render the "Edit" button
          <>
          <Button fullWidth variant='primary'>Continue</Button>
          <Button onClick={()=> setFormEdit(true)} fullWidth variant='inline-link' iconName='edit'> Edit</Button>
          </>
        )}
            

          
          </SpaceBetween>
          </form>
   </>
  )
}

export default ProfileDetails