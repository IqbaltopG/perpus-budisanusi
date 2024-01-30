import {IconBox } from '@tabler/icons-react';
import { Box, Button, TextField, Typography } from '@mui/material';

function App() {

  return (
   <Box sx={{display:"flex",height:"100vh",width:"100vw"}}>
    <Box sx={{backgroundColor:'red',height:'100vh',width:'50vw',display:"flex",justifyContent:'center',alignItems:"center"}}>
    <IconBox size={200} color='white'/>
    </Box>
    <Box sx={{width:'50vw',padding:"32px"}}>
    <Typography variant='h6' sx={{fontWeight:"bold"}}>TYLET</Typography>
    <Box sx={{display:'flex',flexDirection:'column',gap:2,justifyContent:'center',height:'100%'}}>
    <Typography variant='h5' sx={{fontWeight:"bold"}}>LOG IN</Typography>
    <Typography variant='body' sx={{color:'gray'}}>enter your email and password</Typography>
    <TextField label="email" sx={{width:"100%"}}/>
    <TextField label="password" sx={{width:"100%"}}/>
    <Button variant='contained' sx={{width:"100%"}}>Sign in</Button>

    <Box sx={{display:'flex',gap:2,alignItems:'center'}}>
    <Typography variant='caption'>don't have account?</Typography>
    <Button>sign up</Button>
    </Box>
    </Box>
    </Box>



    


   </Box>
  )
}

export default App
