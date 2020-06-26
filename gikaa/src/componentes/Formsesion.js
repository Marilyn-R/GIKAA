/* botones iconos 
 import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import Buttin from '@material-ui/core/Button';

import {Icon, Button, IconButton} from '@material-ui/core';
class Product extends React.Component{
    render(){
        return(
            
        <div>
           {/*  boton normal */}
            <Buttin  color="secondary" disableElevation variant='contained' >
    dgdssada
</Buttin>
          {/*   icono basura azul */}
             <DeleteIcon color="primary"></DeleteIcon> 
            
{/* icono basura negra */}
            <Icon>
                delete
            </Icon>
     {/*        icono de carro */}
            <Icon>
               shopping_cart
            </Icon>
<br></br>
{/* icono con boton eliminar */}
            <Button variant="contained" color="secondary" endIcon={<DeleteIcon/>} >Eliminar
            </Button>

         

{/* icono con sombreado ol azul */}
            <IconButton 
            aria-label="delete"
            > 
            <DeleteIcon 
            color='primary'/>
             </IconButton>


             

        </div>


    
        );
    }


}

export default Product; */