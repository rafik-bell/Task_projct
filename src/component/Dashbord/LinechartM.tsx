import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';



export default function LinechartM() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"bar"> | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    if (chartInstance.current) {
        chartInstance.current.destroy(); 
      }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Comption rate',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          },
        ],
      },
    });
  }, []);
  return (
    <Container sx={{ marginY:'100px'}}>
<Grid container spacing={2}>
  <Grid item md={5} xs={12}>
  <Typography textAlign='center' paddingY='20%' variant='h4' fontFamily='Sous-titre'>Comption rate /month </Typography>
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