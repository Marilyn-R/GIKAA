import React from 'react';
import Listas from '../componentes/Listas';
import {
    makeStyles, Drawer, Divider, 
} from '@material-ui/core';

const estilos = makeStyles(theme => ({
    drawer: {
        width: 200,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 227,
        backgroundColor: 'rgba(255,190,159,1)',
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar
}))

const Cajon = (props) => {
    const classes = estilos()
    return(
        <Drawer className={classes.drawer}
        classes={{paper: classes.drawerPaper}}
        anchor= "left"
         variant={props.variant} 
         open={props.open}
         onClose={props.onClose ? props.onClose: null}
        
         
         >
           

    <div className={classes.toolbar}></div>
    <Divider/> <Listas/>
        </Drawer>
       
    )
}
export default Cajon;