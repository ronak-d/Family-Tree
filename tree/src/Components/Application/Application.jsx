import React, { useEffect, useState } from 'react'
// import styles from '../CSS/Application.module.css'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import handleAxios from '../HandleAxios/HandleAxios';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Application = () => {

  const [addMem, setAddMem] = useState("");
  const [data,setData] = useState(null);
  const [loadings,setLoadings] = useState(true);

  const [memDetails,setMemDetails] = useState({
    fullName: "",
    spouse:"",
    location:"",
    birthYear:"",
    address:"",
    id:nanoid(5),
    familyMember:[]
  });

  function handleDetails(e) {
    const eventName = e.target.name;
    const val = e.target.value;
    
    // console.log(eventName,val);
    const newObj = {...memDetails}
    newObj[eventName] = val;
    setMemDetails((prev)=> newObj)
  }

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form saved successfully");
  }

  // useEffect(() =>{
  //   handleAxios("Family","get",data)
  //   .then((res)=>{
  //     setLoadings(false);
  //     // console.log(res.data[0].FamilyHead);
  //     console.log(res.data[0].familyMember);
  //     setData(res.data[0].familyMember);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //     setLoadings(false);
  //   });
  // },[])

  useEffect(() =>{
    handleAxios("family","get",data)
    .then((res)=>{
      setLoadings(false);
      setData(res.data);
      // console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
      setLoadings(false);
    });
  },[])
  
  console.log("data",data);

  AddMemberData()


  return (
<>
    
<Box sx={{ width: "100%",display:"flex",padding:"3% 0px" }}>
  <Box sx={{ width: "50%",display:"flex",border: "3px solid black",margin:"auto",padding:"1%" }}>
    <Box sx={{ width: "40%",borderRight:" 4mm ridge rgba(211, 220, 50, .6)",padding: "0px 15px"}}>

    <Typography sx={{m:2}}variant="overline" component="h6" align={"center"}>
      Family Tree
    </Typography>


      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >

        {/*Main family Members  */}
        {/* {data.map((e)=>(
        <Button  variant="outlined" size="medium">{e.fullName}</Button> 
        ))} */}

        <Button variant="contained" size="medium">
          Add Family Member
        </Button> 
        <Button variant="contained" size="medium">
          Print Family Tree
        </Button> 
      </Stack>
    </Box>

    {/* form to add family member details */}
    <Box component="form"
      noValidate
      autoComplete="off"
      display="inline-block" 
      sx={{ m:1, width: "60%","& > :not(style)": { m:1, width: "37ch" } }}
      onSubmit={onSubmits}
      >

      <Typography variant="overline" component="h6" textAlign={"left"}>
        Family Details
      </Typography>

      <TextField
        id="outlined-name"
        label="Name"
        name="fullName"
        onChange={handleDetails}
        value={memDetails.fullName}
        
      />
      <TextField
        id="outlined-name"
        label="Spouse"
        name="spouse"
        value={memDetails.spouse}
        onChange={handleDetails}
      />
      <TextField
        id="outlined-name"
        label="Location"
        name="location"
        value={memDetails.location}
        onChange={handleDetails}
      />
      <TextField
        id="outlined-name"
        label="Birth Year"
        name="birthYear"
        value={memDetails.birthYear}
        onChange={handleDetails}
      />
      <TextField
        id="outlined-name"
        label="Address"
        name="address"
        value={memDetails.address}
        onChange={handleDetails}
      />
      {/* <button type="submit">Save</button> */}
    </Box>
  </Box>
</Box>
</>
  )
}

export default Application