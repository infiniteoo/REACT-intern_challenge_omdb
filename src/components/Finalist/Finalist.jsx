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

import useStyles from './FinalistStyles.js'

const Finalist = (props) => {
    const classes = useStyles();
    return (
     
          <Grid container spacing={12}>
           
            <Grid item  xs={12} sm={6} md={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={props.poster}
                  title={props.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5"></Typography>
                  <Typography>
                  {props.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            
          </Grid>
      /*   </Container> */
    )
}

export default Finalist
