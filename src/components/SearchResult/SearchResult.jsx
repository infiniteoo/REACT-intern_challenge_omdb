import React from "react";
import {
  CssBaseline,
  Card,
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";

import useStyles from "./SearchResultStyles";

const SearchResult = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={4} className={classes.rightGrid}>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Search Results
        </Typography>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              /*  image="/static/images/cards/contemplative-reptile.jpg" */
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <form noValidate autoComplete="off">
              <Box textAlign="center">
              <Button
                className={classes.searchButton}
                variant="contained"
                color="primary"
                size="large"
              >
                Add Finalist
              </Button>
              </Box>
              
            </form>
          </CardContent>
        </Card>

        {/* results of search */}
      </Grid>
    </>
  );
};

export default SearchResult;
