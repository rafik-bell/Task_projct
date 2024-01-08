import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@mui/material'
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Layout({ children }:{
    children: any;
}) {
  return (
    <Box>
       <Navbar></Navbar>
        {children}
      <Footer></Footer>
    </Box>
 
  )
}