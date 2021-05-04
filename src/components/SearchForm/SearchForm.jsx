import React, { useState } from 'react'
import API from "../../utils/API";
import env from "react-dotenv";

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
  import useStyles from "./SearchFormStyles";
import { ContactSupportOutlined } from '@material-ui/icons';

const SearchForm = () => {

  const [searchedMovie, setSearchedMovie] = useState({
    title: "",
    rated: "",
    poster: "",
    runtime: "",
  })

  const [movieBeingSearched, setMovieBeingSearched] = useState("")
    const classes = useStyles();
   
    const handleClick = (e) => {
      e.preventDefault();
     console.log('before search', movieBeingSearched)
      API.search(movieBeingSearched)
      .then(res => {
          /* this.setState({ result: res.data }) */
          // de-construct the data we need from the return object
          let { Title:title, Rated:rated, Poster:poster, Runtime:runtime } = res.data 
          /* console.log(title, rated, runtime, poster) */
        console.log(res.data)

       setSearchedMovie({title: title, rated:rated, poster:poster, runtime:runtime})
       console.log("contents of search movie", searchedMovie)
       console.log(searchedMovie)
        })
      .catch(err => console.log(err));
    }

    const handleChange = (e) => {
      setMovieBeingSearched(e.target.value)
      console.log(movieBeingSearched)
    }

    return (
        <>
        
            <Grid item xs={4}>
            <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Movie Search
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
                  onClick={(e)=>handleClick(e)}
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
                considered for this prestigious awardT
              </Typography>
              <Typography variant="h8" align="center" color="primary" paragraph>
                Search engine powered by the OMDb API - The Open Movie Database
              </Typography>
              
            </Grid>
        </>
    )
}

export default SearchForm
