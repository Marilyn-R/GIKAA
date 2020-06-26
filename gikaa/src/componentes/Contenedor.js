import React from 'react';
import Navbar from '../componentes/Navbar';
import Cajon from '../componentes/Cajon';
import Cajita from '../componentes/Cajita';
import {
    makeStyles, Hidden
} from '@material-ui/core'

const estilos =makeStyles(theme=>({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        
        padding: theme.spacing(3),
    },
}))


const Contenedor = () => {
    const classes = estilos();
    const [abrir,setAbrir] = React.useState(false);

    const accionAbrir = () => {
        setAbrir(!abrir)
    }
    return (
        
        <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir}/>
            <Hidden xsDown>
                <Cajon
                variant="permanent"
                open ={true}
                />
            </Hidden>
            <Hidden smUp>
                <Cajon
                variant="temporary"
                open ={abrir}
                onClose= {accionAbrir}
               
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                
               
            </div>

        </div>

    )
}
export default Contenedor;