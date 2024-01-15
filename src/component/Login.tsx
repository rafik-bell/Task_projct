import { Box, Button, Link, Paper, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Cookies } from 'react-cookie'


const cookies = new Cookies()

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

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confpassword:''
  });
  const [formData_err, setFormData_err] = useState({
    username: '',
    email: '',
    password: '',
    confpassword:''
  });
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    try{
      const res = await fetch("http://localhost:4000/user/",{
        method:'POST',
        body:JSON.stringify({email:formData.email,password:formData.password}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data =await res.json()
      if (data.user) {
        cookies.set('jwt', data.token, { maxAge: 60 * 60 * 24 })
        router.push('/Homeuser');

        
      }
      if (data.errors) {
        setFormData_err(data.errors);
       }
      console.log(data.errors);
    }catch (err){
      console.log(err);
     
    }
    
  };
  return (
    <form onSubmit={handleSubmit}>
    <Box data-aos="fade-right"  sx={center} >
      
      <Paper sx={paperStyle} >
        <Typography variant='h4'  fontFamily='Titre' >LOG IN</Typography>
        <TextField  name="email" sx={textField} id="standard-basic" onChange={handleChange} label="Email" variant="standard" />
        {formData_err.email && (
            <Typography variant='body2' color='error'>
              {formData_err.email}
            </Typography>
          )}
         <TextField  name="password" sx={textField} id="standard-basic" onChange={handleChange}  type="password" label="Password" variant="standard" />
        {formData_err.password && (
            <Typography variant='body2' color='error'>
              {formData_err.password}
            </Typography>
          )}
        <Button data-aos="fade-right"  type="submit" sx= {{ color:'var(--eminence)', border:'1px solid var(--eminence)',fontFamily:'Sous-titre'}} variant="outlined">SUBMIT</Button>
      <Link href='/Register' sx={linkstyle}>create acconte</Link>
      </Paper>
     
    </Box>
    </form>
  );
}