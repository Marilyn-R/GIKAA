import React from 'react';
import logo from '../images/logo.svg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Header extends React.Component{
    render(){
        return(
           
        <div>
            <img src={logo} alt="logo"/>
            <Typography variant="h3" color="primary">
            <span className="font-weight-bold">WEB</span>
            </Typography>
            <Typography variant="body1" aling='center' color="secondary">hola</Typography>
            <Button>dfd</Button>
        </div>
        
        )
    }


}

export default Header;