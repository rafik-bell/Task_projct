import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TaskTable from '@/component/Homeuser/TaskTable';
import Navbar from '@/component/Navbar';
import { Cookies } from 'react-cookie'
import { useRouter } from 'next/router';


export default function Homeuser() {
  const router = useRouter();

  //////// animation 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
     
    });
  }, []);


//////fetch of validation token

  useEffect( () => { 
    const fetchData = async () => {
    try{
      const cookies = new Cookies();
    const jwtToken = cookies.get('jwt'); 
    
    
    const res = await fetch('http://localhost:4000/valid' , {
      method: 'GET',
      
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${jwtToken}`
      },
    })
  const data = await res.json();
console.log(data.validate);

  //////validation of token
  if (data.validate === true) {

  }else{
    router.push('/login');
  }
  

    }catch (err){
      console.log(err);
     
    }
  };

  fetchData();
     }, []);
  return (
    <Box> 
      
      <TaskTable></TaskTable>
    </Box>
  )
}