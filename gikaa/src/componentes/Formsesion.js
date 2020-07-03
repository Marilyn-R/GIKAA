import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import {Box, Grid} from '@material-ui/core';
import Cajon from './Cajon';
import Contenedor from './Contenedor';
import { Typography } from '@material-ui/core';
import Buttin from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import ChildCareIcon from '@material-ui/icons/ChildCare';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  menuBotton: {
    margin: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        display: 'none',
        backgroundColor: 'rgba(100,192,204,1)',
       
    },
},
}));

export default function FormRegister() {
  const classes = useStyles();

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
    
      <div> <center>
          <h3>Registrate</h3>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue=""
          variant="outlined"
        />
       <br></br>
       <TextField
          required
          id="outlined-required"
          label="Apellidos"
          defaultValue=""
          variant="outlined"
        />
       <br></br>
       <TextField
          required
          id="outlined-required"
          label="Nombre de usuario"
          defaultValue=""
          variant="outlined"
        />
       <br></br>
      
        <TextField
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br></br>
        <TextField
          id="outlined-number"
          label="Edad"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br></br>
        <Button variant='text' color="secundary">Registrate  < ChildCareIcon /></Button>
        <h6></h6><Button variant='text' color="secundary"><h6>Ya tienes cueta, Registrate aquí</h6></Button>
        </center>
      </div>
      
    </form>
    
  );
}
