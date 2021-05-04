import React from 'react'
import {
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Container,
    TextField,
    Button,
    Grid,
    Paper,
  } from "@material-ui/core";

import useStyles from "./SearchResultStyles";

const SearchResult = () => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={4}>
            <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Search for Movies
              </Typography>

              <form noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Enter title..."
                  variant="outlined"
                  fullWidth
                />
                <Button
                  className={classes.searchButton}
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Search
                </Button>
              </form>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Cast your votes for the Shopify™ Movie of the Year! Enter movie
                titles into the search bar to nominate your favorite movie to be
                considered for this prestigious award.
              </Typography>
              <Typography variant="h8" align="center" color="primary" paragraph>
                Search engine powered by the OMDb API - The Open Movie Database.
              </Typography>
              
            
              {/* results of search */}
            </Grid>
        </>
    )
}

export default SearchResult