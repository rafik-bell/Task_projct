import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
const titele = {
  marginY: 3,
  fontSize: 25,
  fontWeight: 600,
  fontFamily:'Sous-titre'

 

};
const gridstyle = {
  display: 'flex',
  justifyContent: 'start',
  alignItems:"center"};

export default function Footer() {
  return (
    
    <Box sx={{  minWidth:"100%",bgcolor:'var(--eminence)',color:'white',marginTop:"30px"}}>
      <Container>
      <Grid container spacing={1}>
  <Grid sx={gridstyle} item  lg={12}>
  <Image
        src="/White PNG.png" 
        alt="Description of the image"
        width={340}
        height={96} 
      />
      </Grid>
      
 
 
</Grid>
        
<Grid container spacing={3}>
  <Grid item xs={12} md={6} lg={4}>
  <Typography  sx= {{ ...titele, ...{ color: '#ffa726' } }}>Funnel Boost Media</Typography>
  <Typography fontFamily='Text' sx={{marginY: 3}}>3201 Cherry Ridge, Suite 328<br></br>
      San Antonio, Tx 78230<br></br>
     <span style={{color:'#ffa726'}}>(210) 503-8024<br></br></span> 
      8am-6pm Everyday
</Typography>
<Image
        src="/googled.png" 
        alt="Description of the image"
        width={200}
        height={80} 
      />
   
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
  <Typography sx={titele}>Digital Marketing Services</Typography>
  <Typography  fontFamily='Text' sx={{color:'#ffa726'}}>Local SEO<br></br>
National SEO Services<br></br>
PPC & Search Marketing<br></br>
Website Design & Development<br></br>
News & Blog
</Typography>
   
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
  <Typography sx={titele}>Resources</Typography>
  <Typography  fontFamily='Text' sx={{color:'#ffa726'}}>Privacy <br></br>
Terms of Service<br></br>
Contract Terms & Conditions<br></br>
Areas Of Coverage<br></br>
Careers<br></br>
Job Interview Phishing Scam Notice<br></br>
Sitemap
</Typography>
    
  </Grid>
</Grid>

        </Container>
    </Box>
    
 
  )
}