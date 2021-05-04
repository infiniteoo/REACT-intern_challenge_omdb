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

const SearchResult = (props) => {
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
              alt={props.searchedMovie.title}
              height="140"
               image={props.searchedMovie.poster}
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.searchedMovie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.searchedMovie.plot}
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
