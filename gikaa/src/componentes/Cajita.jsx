import React from 'react'
import {Box, Grid} from '@material-ui/core';
import RecipeReviewCard from '../componentes/RecipeReviewCard';
import { Typography } from '@material-ui/core';
export const Cajita = () => {
    return (
        <div>
       <Typography variant='text'  >
           <Box color= '#8c3d66'            
           px={1} >      
           <Typography variant="body2" color="textSecondary" component="p">
           Aquí empiezan los productos
        </Typography>
              
           </Box> <br></br>

        <Grid container>
                
                <Grid item xs={3} sm={6} md={3}> 
                    <Box px={2}>
                        <RecipeReviewCard />
                    </Box>  
                </Grid>

                <Grid item xs={3} > 
                    <Box px={2}>
                        <RecipeReviewCard />
                    </Box>  
                </Grid>

                <Grid item xs={3} > 
                    <Box px={2}>
                        <RecipeReviewCard />
                    </Box>  
                </Grid>
                <Grid item xs={3} > 
                    <Box px={2}>
                        <RecipeReviewCard />
                    </Box>  
                </Grid>



                <Grid item xs={3} > 
                    <Box px={2} mt={2}>
                        <RecipeReviewCard />
                    </Box>  
                </Grid>
                <Grid item xs={3} > 
                    <Box px={2} mt={2}>
                        <RecipeReviewCard />
                    </Box>  
                </Grid>
                <Grid item xs={3} > 
                    <Box px={2} mt={2}>
                        <RecipeReviewCard />
                    </Box>  
                </Grid>
                <Grid item xs={3} > 
                    <Box px={2} mt={2}>
                        <RecipeReviewCard />
                    </Box>  
                </Grid>




        </Grid>
      
       
        </Typography >
        </div>
    )
}
export default Cajita;