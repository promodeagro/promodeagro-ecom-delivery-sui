import { Box, Button, Container, Form, FormField, Header, Icon, Input, SpaceBetween } from '@cloudscape-design/components'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
const ProfileDetails = () => {

  
  const navigate = useNavigate();

  const [username, setUsername] = useState("salmanbinmoosa")
  const [email, setEmail] = useState("salmanbinmosa@gmail.com")
  const [password, setPassword] = useState("")
  
  // handle form state
  const [formEdit, setFormEdit] = useState(false)
  

  const handleForm = (e) =>{
    e.preventDefault()

  }


// // fetching dami users for redux 
// const users = useSelector((state) => state.users.users);


// const dispatch = useDispatch();
// console.log("pro", users);
// const { data = [], status } = users;
// console.log("data", data);
// useEffect(() => {
//   dispatch(fetchUsers());
// }, []);


// states

const [name,setName] = useState("")
const [mail,setMail] = useState("")
const [phoneNumber,setPhoneNumber] = useState("")
const [flat,setFlat] = useState("")
const [block,setBlock] = useState("")
const [apartment,setApartment] = useState("")
const [area,setArea] = useState("")
const [zipCode,setZipCode] = useState("")



// const { loading, error } = useSelector((state) => state.createUser);
// send customer data api calling

// const handleSubmitUser = (e) => {
//   e.preventDefault()
//   dispatch(CreateUser({name, mail, phoneNumber ,flat , block , apartment , area , zipCode}))
//   console.log('Loading.....', loading)
//   console.log( 'Error happeniung' , error)
// }


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


<form 
// onSubmit={handleSubmitUser}
>
<SpaceBetween direction='vertical' size='l'>
<Input  onChange={(e)=> setName(e.detail.value)} placeholder='Name' value={name}/>
<Input ariaRequired onChange={(e)=> setMail(e.detail.value)}  placeholder='E-mail' value={mail}/>
<Input  onChange={(e)=> setPhoneNumber(e.detail.value)}  placeholder='number' value={phoneNumber}/>
<Input  onChange={(e)=> setFlat(e.detail.value)}  placeholder='flat' value={flat}/>
<Input  onChange={(e)=> setBlock(e.detail.value)}  placeholder='Block' value={block}/>
<Input  onChange={(e)=> setApartment(e.detail.value)}  placeholder='apartment' value={apartment}/>
<Input  onChange={(e)=> setArea(e.detail.value)}  placeholder='area' value={area}/>
<Input  onChange={(e)=> setZipCode(e.detail.value)}  placeholder='zipcodde' value={zipCode}/>
</SpaceBetween>

<Button>Add Customner</Button>
</form>
   </>
  )
}

export default ProfileDetails