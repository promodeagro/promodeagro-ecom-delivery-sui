
// Need to change DOB date picker as ISO stringify and make it dynemecly


import { Button, DatePicker, FormField, Header, Input, Select, SpaceBetween } from '@cloudscape-design/components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePersonalDetails } from 'Redux-Store/PersonalDetails/PersonalDetails';



const OnboardPersonalDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error, data } = useSelector((state) => state.personalDetailsSlice);

  const [fullName, setFullName] = useState("");
  // const [DOB, setDOP] = useState(new Date().toISOString());
  const [DOB, setDOP] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [relation, setRelation] = useState("");
  const [referenceMobile, setReferenceMobile] = useState("");

const DObDate = new Date().toISOString

  const riderId = JSON.parse(localStorage.getItem("id"));


  const handleSubmit = () => {
    dispatch(updatePersonalDetails({
      id: riderId,
      fullName,
      dob: "2000-01-01T00:00:00Z",
      email,
      address: {
        address1: addressLine1,
        address2: addressLine2,
        landmark,
        state,
        city,
        pincode,
      },
      reference: { relation, number: referenceMobile },
    }));

    // need to remove this bin code


    console.log(loading)
    console.log(error)
    console.log(data)

    navigate("/app/register/bank-details")
  }

  return (

    <>

      <div>

        <Header variant='h1'>
          <span style={{ fontSize: '32px', fontWeight: '600' }}>Personal Details</span>
        </Header>

        <div style={{ marginTop: 23 }}></div>

        <SpaceBetween direction='vertical' size='l'>
          {/* Name and Details */}
          <SpaceBetween direction='vertical' size='m'>
            <Input
              onChange={(e) => setFullName(e.detail.value)}
              value={fullName}
              placeholder='Full Name'
            />

            <DatePicker
              onChange={({ detail }) => setDOP(detail.value)}
              value={DOB}
              openCalendarAriaLabel={selectedDate =>
                "Choose certificate expiry date" +
                (selectedDate
                  ? `, selected date is ${selectedDate}`
                  : "")
              }
              placeholder="YYYY/MM/DD"
            />


            <Input
              onChange={(e) => setMobileNumber(e.detail.value)}
              value={mobileNumber}
              placeholder='Mobile Number'
            />


            <Input
              onChange={(e) => setEmail(e.detail.value)}
              value={email}
              placeholder='Email ID'
            />
          </SpaceBetween>

          {/* Address */}
          <FormField label="Address">
            <SpaceBetween size='m' direction='vertical'>
              <Input
                onChange={(e) => setAddressLine1(e.detail.value)}
                value={addressLine1}
                placeholder='Address Line 01'
              />
              <Input
                onChange={(e) => setAddressLine2(e.detail.value)}
                value={addressLine2}
                placeholder='Address Line 02'
              />
              <Input
                onChange={(e) => setLandmark(e.detail.value)}
                value={landmark}
                placeholder='Landmark'
              />
              <Select
                placeholder='Select State'
                onChange={({ detail }) => setState(detail.selectedOption.value)}
                selectedOption={state ? { value: state, label: `Option ${state}` } : null}
                options={[
                  { label: "Telangana", value: "Telangana" },
                  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
                  { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
                  { label: "Assam", value: "Assam" },
                  { label: "Bihar", value: "Bihar" },
                  { label: "Chhattisgarh", value: "Chhattisgarh" },
                  { label: "Goa", value: "Goa" },
                  { label: "Gujarat", value: "Gujarat" },

                ]}
              />
              <Select
                placeholder='Select City'
                onChange={({ detail }) => setCity(detail.selectedOption.value)}
                selectedOption={city ? { value: city, label: `${city}` } : null}
                options={[
                  { label: "Hyderabad", value: "Hyderabad" },
                  { label: "Warangal", value: "Warangal" },
                  { label: "Delhi", value: "Delhi" },
                  { label: "Mumbai", value: "Mumbai" },
                  { label: "Bengaluru", value: "Bengaluru" },
                  { label: "Chennai", value: "Chennai" },
                  { label: "Kolkata", value: "Kolkata" },
                  { label: "Pune", value: "Pune" },
                  { label: "Ahmedabad", value: "Ahmedabad" },
                ]}
              />
              <Input
                onChange={(e) => setPincode(e.detail.value)}
                value={pincode}
                placeholder='Pincode'
              />
            </SpaceBetween>
          </FormField>

          {/* Reference Contact */}
          <FormField label="Reference Contact">
            <SpaceBetween size='m' direction='vertical'>
              <Select
                placeholder='Relation'
                onChange={({ detail }) => setRelation(detail.selectedOption.value)}
                selectedOption={relation ? { value: relation, label: ` ${relation}` } : null}
                options={[
                  { label: "Friend", value: "Friend" },
                  { label: "Family", value: "Family" },
                  { label: "Relative", value: "Relative" },
                  { label: "Sibling", value: "Sibling" },
                  { label: "Mentor", value: "Mentor" },
                  { label: "Other", value: "Other" }
                ]}
              />
              <Input
                onChange={(e) => setReferenceMobile(e.detail.value)}
                value={referenceMobile}
                placeholder='Mobile Number'
              />
            </SpaceBetween>
          </FormField>

          <Button onClick={handleSubmit} variant='primary' fullWidth>
            Complete
          </Button>
        </SpaceBetween>

      </div>
    </>
  );
};

export default OnboardPersonalDetails;
