import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@mui/material'
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }:{
    children: any;
}) {
  const router = useRouter();
  return (
    <Box>
      {(router.pathname !== '/login' && router.pathname !== '/Register' )&&(
       <Navbar></Navbar>
       )}
        {children}
        {(router.pathname !== '/login' && router.pathname !== '/Register' )&&(
      <Footer></Footer>
      )}
    </Box>
 
  )
}