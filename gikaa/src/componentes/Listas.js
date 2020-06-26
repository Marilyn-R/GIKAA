import React from 'react';
import {
    List,ListItem,ListItemIcon,ListItemText, Divider, 
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';


    const Listas = () => {
  
    return (
    
        <List > 
            <ListItem  button >
                <ListItemIcon >
                    <StoreMallDirectoryIcon/>
                </ListItemIcon>
                <ListItemText primary = 'Tienda'/>
            </ListItem><Divider/>
            <ListItem button >
                <ListItemIcon>
                    < AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary = 'Mi perfil'/>
            </ListItem><Divider/>
           
            <ListItem button >
                <ListItemIcon>
                    < FavoriteIcon/>
                </ListItemIcon>
                <ListItemText primary = 'Favoritos'/>
            </ListItem><Divider/>
 
            <ListItem button >
                <ListItemIcon>
                    < ImportContactsIcon/>
                </ListItemIcon>
                <ListItemText primary = 'Catálogo'/>
            </ListItem><Divider/>

           
            <ListItem button >
                <ListItemIcon>
                    < EmojiObjectsIcon/>
                </ListItemIcon>
                <ListItemText primary = 'Mujeres Creativas'/>
            </ListItem><Divider/>

            <ListItem button >
                <ListItemIcon>
                    < FilterVintageIcon/>
                </ListItemIcon>
                <ListItemText primary = ' Clientas felices'/>
            </ListItem><Divider/>

            <ListItem button >
                <ListItemIcon>
                    <LocationOnIcon/>
                </ListItemIcon>
                <ListItemText primary = 'Ubicación'/>
              
            </ListItem><Divider/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
           <center><h6>Versión 3.2</h6></center> 
        </List>
       
    )
}
export default Listas;