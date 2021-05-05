import React from "react";
import {
  Card,
  Typography,
  Button,
  Grid,
  Box,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";

import useStyles from "./SearchResultStyles";

const SearchResult = (props) => {
  const classes = useStyles();

  const addFinalist = (movieObject) => {
    // covert existing way to use this method so we can 1) check for duplicates in
    // finalists array and 2) ensure the cap of the finalists array never exceeds 5
  };
  return (
    <>
      <Grid item xs={4} className={classes.rightGrid}>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {/* Search Results */}
        </Typography>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.searchedMovie.title}
              height="400px"
              image={props.searchedMovie.poster}
              title={props.searchedMovie.title}
              className={classes.cardpic}
              style={{ objectFit: "contain", padding: "10px" }}
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.searchedMovie.title} | {props.searchedMovie.rated} |{" "}
              {props.searchedMovie.runtime}
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
                  onClick={() => {
                    props.setFinalists((oldArray) => [
                      ...props.finalists,
                      props.searchedMovie,
                    ]);
                  }}
                >
                  Add Finalist
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SearchResult;
