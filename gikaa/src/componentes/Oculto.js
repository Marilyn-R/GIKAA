import React from 'react';
import {withWidth, Typography, Hidden, Button} from '@material-ui/core';
const Oculto = (props) => {
    return (
        <div>sdfdsf
            <Typography varinat="h6" color="initial">
ancho:  {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant="contained" color ="primary">
                    xs
                </Button>
            </Hidden>
            <Hidden xsDown>
                <Button variant="contained" color ="primary">
                    xs
                </Button>
            </Hidden>
        </div>
    
    )
}
export default withWidth() (Oculto);