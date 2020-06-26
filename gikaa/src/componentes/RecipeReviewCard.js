import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Rating from '@material-ui/lab/Rating';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';
import Buttin from '@material-ui/core/Button';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 1,
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
 
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      
        
      <CardMedia 
        className={classes.media}
        image={require('./../images/1.jpg')}
        title="Collar naranja"
        
      />  <center> <Typography component="legend">Dúo de collar y aretes color naranja con bordados de colores</Typography>
      <Box  borderColor="transparent"><h4>$348.34 </h4> 
      <Rating name="pristine" value={null} />
      </Box>
     <br></br> <Buttin  color="secondary" disableElevation variant='contained' >
   COMPRAR 
</Buttin></center>
     
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> 
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CreateIcon /> 
        </IconButton>

        <IconButton aria-label="share">
        <ShoppingCartIcon/> 
        </IconButton>
       
        <IconButton aria-label="share">
        <BookmarkBorderIcon />
        </IconButton>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       
        <CardContent>
          <Typography paragraph>¿Cómo editar? <IconButton aria-label="share">
          <ShareIcon /> 
        </IconButton></Typography>
          <Typography paragraph> 
          Lo que puedes hacer es: 
          Escoger el tamaño de tu pieza, la forma, el color, el bordado, el tamaño y demás accesorios que tenga.
         <br></br> <center>
            <Buttin  color="primary" disableElevation variant='contained' >
  ¡EDITAR YA!
</Buttin></center> </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
