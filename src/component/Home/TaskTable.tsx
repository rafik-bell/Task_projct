import Head from 'next/head'
import Image from 'next/image'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from '@mui/material'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'var(--eminence)',
      color: theme.palette.common.white,
      fontFamily:'Sous-titre'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontFamily:'Text'
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    
  ) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('task name exmpele', 'discription of task',"12/12/2023", 'Completed'),
    createData('task name exmpele', 'discription of task', "12/12/2023",'Completed' ),
    createData('task name exmpele', 'discription of task', "12/12/2023", 'Completed'),
    createData('task name exmpele', 'discription of task', "12/12/2023", 'Completed'),
    createData('task name exmpele', 'discription of task', "12/12/2023", 'Completed'),
  ];

  const addtask ={display:'flex',
  alignItems:"center",
  fontFamily:'Sous-titre',
  my:'10px',
  justifyContent:'space-between'
}
export default function TaskTable() {
    
  return (
    <Container>
    <Box sx={{ marginY:'100px'}}>
      <Typography variant='h4' fontFamily='Titre'>Rafik Bellarbi</Typography>
        <Box  sx={addtask} >
        <Typography variant='h3' fontFamily='Titre'>MY TASK</Typography>
        <Button sx={{color:'var(--eminence)' }}><PostAddIcon></PostAddIcon> Add Task</Button>
        </Box>
    
    <TableContainer data-aos="fade-up" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>Name Task</StyledTableCell>
            <StyledTableCell align="center">disctiption</StyledTableCell>
            <StyledTableCell align="center">date</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center"><Button color="success" variant="contained" >{row.carbs}</Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       
    
    </Box>
    </Container>
  )
}