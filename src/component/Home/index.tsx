import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from '../Navbar';
import TaskTable from './TaskTable';

export default function Homepqge() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
     
    });
  }, []);
  return (
    <Box> 
      <Navbar></Navbar>
      <TaskTable></TaskTable>
    </Box>
  )
}