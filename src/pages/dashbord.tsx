import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@mui/material'
import Login from '@/component/Login'
import Navbar from '@/component/Navbar'
import Bargraph from '@/component/Dashbord/Bargraph'
import Taskfilter from '@/component/Dashbord/Taskfilter'
import LinechartM from '@/component/Dashbord/LinechartM'




export default function Dashbord() {
  return (
    <Box> 
    
    <Bargraph></Bargraph>
    <Taskfilter></Taskfilter>
    <LinechartM></LinechartM>
  </Box>
  
 
  )
}