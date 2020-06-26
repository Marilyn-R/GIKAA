import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../Styles/Style.css';
import { Divider, 
} from '@material-ui/core';
import { AppBar, Toolbar,Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/logo.svg';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import LeakAddIcon from '@material-ui/icons/LeakAdd';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
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
title: {
    flexGrow: 10
},
AppBar:{
    [theme.breakpoints.up('sm')]: {
    width: ` calc(100% - ${200}px)`,
    display: 'inline-bock',
    flexWrap: 'wrap',
        position: 'fixed',
       
    backgroundColor: 'rgba(100,192,204,1)',
    },
},

}))
 
    const Navbar = (props) => {
    const classes = useStyles()
    
        return(
            
           
    
            <AppBar className={classes.AppBar}>
                <Toolbar>
                    <IconButton color ="inherit" aria-label="menu" 
                    className={classes.menuBotton}
                    onClick={() => props.accionAbrir()}
                    >
                        <MenuIcon /> 
                    </IconButton>
                  
                    <Typography variant='text'  color="secundary" className={classes.title}>
                    <Button variant='text' color="secundary"> <img className ="logo" src={logo} alt="logo" />
                     WEB  </Button>  </Typography>
                    
                    <form className={classes.root} noValidate autoComplete="off">
                    
                    <TextField
                    id="outlined-secondary"
                    label="BUSCA AQUÍ"
                    variant="outlined"
                    color="secondary"
                    />
                  </form>
                     <Button color="secundary"><SearchIcon color="secundary"/></Button>
                    <Button variant='text' color="secundary"> Tendencias < LeakAddIcon /> </Button><br></br>
                    <Button variant='text' color="secundary"> Promociones < BlurOnIcon /></Button>
                 
                    <Button variant='text' color="secundary">Iniciar sesión < ChildCareIcon /></Button>
                    
                    <Button variant='text' color="secundary"> Tu Carrito < AddShoppingCartIcon /></Button>
                                 
                <Divider/>
                </Toolbar>               
            </AppBar>
        )
    }
export default Navbar;

