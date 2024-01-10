import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Taskfilter from './Taskfilter';






export default function Bargraph() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"bar"> | null>(null);
  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }

    const ctx = chartRef.current.getContext('2d') ;
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['12.12.2023', '12.12.2023', '12.12.2023', '12.12.2023', '12.12.2023', '12.12.2023','12.12.2023','10.12.2023','12.12.2023', '12.12.2023', '12.12.2023', '12.12.2023', '12.12.2023', '12.12.2023','12.12.2023'],
        datasets: [
          {
            label: '# of Task',
            data: [12, 19, 3, 5, 2, 3,6,7,12, 19, 3, 5, 2, 3,6],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Cleanup: Destroy the chart when the component is unmounted
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (

    <Container sx={{ marginY:'100px'}}>
   <Typography variant='h3' textAlign='center' sx={{border:'2px solid black',mb:'30px'}} fontFamily='Titre'>Dashboard</Typography>
   
  <Typography variant='h4' fontFamily='Sous-titre'>Task Completed</Typography>
  <Grid container spacing={2}>
  <Grid item md={5} xs={12}>
  <Typography textAlign='center' paddingY='20%' variant='h4' fontFamily='Sous-titre'>Task Completed in Last 15 Days</Typography>
  </Grid>
  <Grid item md={7}xs={12}>
  
  <Box sx={{ maxHeight:'500px', minWidth:{xs:'300px',md:'400px'},}}>
  <canvas ref={chartRef} width={700} height={600}></canvas>
  </Box>
  </Grid>
  </Grid>
  
  

  
    </Container>
   
  
 
  )
}