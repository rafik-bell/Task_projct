import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TaskTable from '@/component/Homeuser/TaskTable';
import Navbar from '@/component/Navbar';


export default function Homeuser() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
     
    });
  }, []);
  return (
    <Box> 
      
      <TaskTable></TaskTable>
    </Box>
  )
}