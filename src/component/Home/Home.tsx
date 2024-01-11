import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation';
const center = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
  my:{md:'50px',xs:"250px"}
  
  
};
const btncenter = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  mt:'50px',

  
};
const btn={
  bgcolor:'var(--eminence)',
  width:'200px'

}



export default function HomeP() {
  return (
    <Container sx={center}>
      <Grid container spacing={2}>
  <Grid item md={7} xs={12} >
    <Typography variant='h3' textAlign='center' fontFamily='Titre'>Welcome to <Typography variant='h2'  fontFamily='Titre' color='var(--eminence)'>Tasks Manager</Typography> </Typography>
    <Typography fontFamily='Text' variant='h6' textAlign='justify'> <strong>Welcome</strong>   to our <strong> Task Manager</strong>  – your go-to destination for seamless online task monitoring and management. Explore real-time performance insights, effortlessly control processes, and optimize resource utilization. Empower your digital experience with our intuitive tools for efficient task handling.</Typography>
    <Box sx={btncenter}>
    <Button sx={btn} size='large' href='\login' variant='contained' >Join us<NavigationIcon></NavigationIcon></Button>
    </Box>
  </Grid>
  <Grid item md={5} xs={12} >
  <Image
        src="/homeimage.png" 
        alt="Description of the image"
        width={400}
        height={400} 
       
      />

    
  </Grid>
  </Grid>
      

    </Container>
  
 
  )
}