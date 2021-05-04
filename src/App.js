import React from "react";
import SearchForm from './components/SearchForm/SearchForm'
import SearchResult from './components/SearchResult/SearchResult'
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
import { Movie } from "@material-ui/icons";

import useStyles from "./AppStyles";

const App = () => {
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
          <Grid id="top-row" container spacing={24}>
          <Grid item xs={2}></Grid>
            <SearchForm /> 
            <SearchResult />
            
            
            <Grid item xs={2}></Grid>
          </Grid>
        </div>
      </main>
    </>
  );
};

export default App;
