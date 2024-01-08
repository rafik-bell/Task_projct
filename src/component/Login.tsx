import { Box, Button, Paper, TextField, Typography } from '@mui/material';


const center = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
  bgcolor:'var(--Bright_Gray)'
  
};

const paperStyle = {
  width: '30%',
  padding: '40px', 
  display: 'flex',
  flexDirection: 'column',
 
};
const textField ={
    mb:'30px',
    color:'var(--eminence)'
}

export default function Login() {
  return (
    <Box data-aos="fade-right"  sx={center} >
      <Paper sx={paperStyle} >
        <Typography variant='h4'  fontFamily='Titre' >LOG IN</Typography>
        <TextField sx={textField} id="standard-basic" label="User name" variant="standard" />
        <TextField sx={textField} id="standard-basic" label="Password" variant="standard" />
        <Button data-aos="fade-right" sx= {{ color:'var(--eminence)', border:'1px solid var(--eminence)',fontFamily:'Sous-titre'}} variant="outlined">SUBMIT</Button>
      </Paper>
      
    </Box>
  );
}