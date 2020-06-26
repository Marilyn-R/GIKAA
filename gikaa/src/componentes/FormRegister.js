import React from 'react';
import theme from './TemaConfig';
import {ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../Styles/Style.css';
import Navbar from '../componentes/Navbar';
import Contenedor from '../componentes/Contenedor';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

{/* <Buttin  color="primary" disableElevation variant='contained' >
    Registrarme
</Buttin> */}

class FormRegister extends React.Component{

    
    render(){ const classes = useStyles();
      
        return(
            
           
        <ThemeProvider theme= {theme}>
           <Navbar/><Contenedor/>  

           
            <Button  variant="contained" color="primary">dfd</Button>
            <Button  variant="contained" color="secondary">dfd</Button>
            <h1>sdfdf</h1>
            <form className={classes.root} noValidate autoComplete="off">
      
     
     
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />  </form>
       

        </ThemeProvider>
        
        )
    }


}

export default FormRegister;