import { Box, Button, Link, Paper, TextField, Typography } from '@mui/material';


const center = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
  bgcolor:'var(--Bright_Gray)'
  
};

const paperStyle = {
    width:{ md:'30%',sx:"100%"},
  padding: '40px', 
  display: 'flex',
  flexDirection: 'column', 
 
 
};
const textField ={
    mb:'30px',
    color:'var(--eminence)'
}
const linkstyle={
  color:'var(--eminence)' ,
  mt:'30px',

  textAlign:"center",
  fontSize: 18,
  textDecoration:'none',
  fontWeight: 600,
  fontFamily:"Sous-titre",

  '&:hover': {
    textDecoration: 'none',
    color :'var(--Bright_Gray)',
  }
}

export default function Register() {
  return (
    <Box data-aos="fade-right"  sx={center} >
      <Paper sx={paperStyle} >
        <Typography variant='h4'  fontFamily='Titre' >Register</Typography>
        <TextField sx={textField} id="standard-basic" label="User name" variant="standard" />
        <TextField sx={textField} id="standard-basic" label="Email" variant="standard" />
        <TextField sx={textField} id="standard-basic" label="Password" variant="standard" />
        <TextField sx={textField} id="standard-basic" label="confrm Password" variant="standard" />
        <Button data-aos="fade-right" sx= {{ color:'var(--eminence)', border:'1px solid var(--eminence)',fontFamily:'Sous-titre'}} variant="outlined">SUBMIT</Button>
      <Link href='login' sx={linkstyle}>Login Accont</Link>
      </Paper>
      
    </Box>
  );
}