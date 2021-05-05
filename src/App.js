import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResult from "./components/SearchResult/SearchResult";
import BlankSearchResult from "./components/SearchResult/BlankSearchResult";
import Finalist from './components/Finalist/Finalist'
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Container
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
  const [finalists, setFinalists] = useState([])
  
  const classes = useStyles();

  useEffect(() => {
    console.log('change in finalists: ', finalists)
  }, [finalists])

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
            {searchedMovie.title === "" ? (
              <BlankSearchResult />
            ) : (
              <SearchResult
                searchedMovie={searchedMovie}
                setSearchedMovie={setSearchedMovie}
                movieBeingSearched={movieBeingSearched}
                setMovieBeingSearched={setMovieBeingSearched}
                finalists={finalists}
                setFinalists={setFinalists}
              />
            )}

            <Grid item xs={2}></Grid>
           
          </Grid>
          <Container className={classes.cardGrid} maxWidth="lg"> 
          {finalists[0] ? finalists.map((finalist) => (
            <Finalist
              title={finalist.title}
            
            /> 

          ))
          
          
          : null}
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
