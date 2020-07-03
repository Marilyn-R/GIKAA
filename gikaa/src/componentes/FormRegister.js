import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import {Box, Grid} from '@material-ui/core';
import Cajon from './Cajon';
import Contenedor from './Contenedor';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormRegister() {
  const classes = useStyles();

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
     <Navbar/>
     
     <Typography variant='text'  >
           <Box color= '#8c3d66'            
           px={20} >      
           <Typography variant="body2" color="textSecondary" component="p">
           Aquí empiezan los productos
        </Typography>
              
           </Box> <br></br>

        <Grid container>
                
                <Grid item xs={10} sm={6} md={2}> 
                    <Box pt={1}>
                    <TextField
          required
          id="outlined-required"
          label="Requiregdhd"
          defaultValue="Hello World"
          variant="outlined"
        />
                    </Box>  
                </Grid>
                </Grid>
      
                <Contenedor 
     />
      </Typography >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
        />
       
     
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
        />
        
      </div>
      
    </form>
    
  );
}
