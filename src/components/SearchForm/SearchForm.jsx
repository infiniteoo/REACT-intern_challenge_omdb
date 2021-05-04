import React from "react";
import API from "../../utils/API";
import poster from "../../assets/award.jpg";
import { Typography, TextField, Button, Grid, Box } from "@material-ui/core";
import useStyles from "./SearchFormStyles";

const SearchForm = (props) => {
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();

    API.search(props.movieBeingSearched)
      .then((res) => {
        
        // de-construct the data we need from the return object
        let {
          Title: title,
          Rated: rated,
          Poster: poster,
          Runtime: runtime,
          Plot: plot,
        } = res.data;
        
        console.log(res.data);

        props.setSearchedMovie({
          title: title,
          rated: rated,
          poster: poster,
          runtime: runtime,
          plot: plot,
        });
        const printIt = () => console.log(props.searchedMovie);
        printIt();
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    props.setMovieBeingSearched(e.target.value);
    console.log(props.movieBeingSearched);
  };

  return (
    <>
      <Grid item xs={4}>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
         {/*  Movie Search */}
        </Typography>

        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Enter title..."
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Button
            className={classes.searchButton}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={(e) => handleClick(e)}
          >
            Search
          </Button>
        </form>
        <Box style={{ textAlign: "center", display: "flex" }}>
          <img src={poster} alt="" className={classes.awardPic} />
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Cast your votes for the Shopify™ Movie of the Year! <br />
            <br />
            Enter movie titles into the search bar to nominate your favorite
            movie to be considered for this prestigious award!
            <br />
            <br />
            <Typography
              variant="subtitle2"
              align="center"
              color="primary"
              paragraph
            >
              Search engine powered by the OMDb API - The Open Movie Database
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default SearchForm;
