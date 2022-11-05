import React, { useEffect, useState } from 'react'
// import styles from '../CSS/Application.module.css'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import handleAxios from '../HandleAxios/HandleAxios';



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

  useEffect(() =>{
    handleAxios("Family","get",data)
    .then((res)=>{
      setLoadings(false);
      console.log(res.data);
      console.log(res.data[0].familyMember[0].name);
    })
    .catch((err)=>{
      console.log(err);
      setLoadings(false);
    });
  },[])

  return (
<>
    <Typography variant="h6" component="h2" textAlign={"center"}>
      Family Tree
    </Typography>
    
  <Box sx={{ width: "100%",display:"flex",border: "2px solid red" }}>
    
    <Box sx={{ width: "40%",border: "2px solid red" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>

    <Box sx={{ width: "60%",border: "2px solid red" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>

  </Box>
</>
  )
}

export default Application