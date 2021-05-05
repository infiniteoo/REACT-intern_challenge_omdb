import React from 'react'

import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button,
  } from "@material-ui/core";

  import CancelIcon from '@material-ui/icons/Cancel';

import useStyles from './FinalistStyles.js'

const Finalist = (props) => {
    const classes = useStyles();
    return (
     
          <Grid container spacing={12}>
           
            <Grid item  xs={1} sm={3} md={12}>
              <Card className={classes.card}>
              <Button size="small" color="primary" startIcon={<CancelIcon/>}/>
                    
                
              <Typography
                color="textPrimary"
                variant="h8"
              >
                   #{props.index}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                style={{paddingLeft: "5px"}}
              >
                 {props.title} 
              </Typography>
                <CardMedia
                  component="img"
                  alt={props.title}
                  height="100px"
                  className={classes.cardMedia}
                  image={props.poster}
                  title={props.title}
                  style={{ objectFit: "contain",  padding: "10px" }}
                />
               
                <CardActions>
                  
                  
                </CardActions>
              </Card>
            </Grid>
            
          </Grid>
      /*   </Container> */
    )
}

export default Finalist
