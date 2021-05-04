import React, { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResult from "./components/SearchResult/SearchResult";
import BlankSearchResult from "./components/SearchResult/BlankSearchResult";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";


import useStyles from "./AppStyles";

const App = () => {
  const [searchedMovie, setSearchedMovie] = useState({
    title: "",
    rated: "",
    poster: "",
    runtime: "",
    plot: "",
  });

  const [movieBeingSearched, setMovieBeingSearched] = useState("");
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h2"> Shopify Movie Awards </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Grid id="top-row" container spacing={10}>
            <Grid item xs={2}></Grid>
            <SearchForm
              searchedMovie={searchedMovie}
              setSearchedMovie={setSearchedMovie}
              movieBeingSearched={movieBeingSearched}
              setMovieBeingSearched={setMovieBeingSearched}
            />
            {searchedMovie.title === "" ? <BlankSearchResult/> :
            <SearchResult
            searchedMovie={searchedMovie}
            setSearchedMovie={setSearchedMovie}
            movieBeingSearched={movieBeingSearched}
            setMovieBeingSearched={setMovieBeingSearched}
          />
            
            
            
            
            }
            

            <Grid item xs={2}></Grid>
          </Grid>
        </div>
      </main>
    </>
  );
};

export default App;
