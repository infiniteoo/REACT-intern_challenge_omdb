import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { Movie } from "@material-ui/icons";
import useStyles from "./AppStyles";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Movie className={classes.iconLeft} />

          <Typography variant="h1"> movie of the year </Typography>

          <Movie className={classes.iconRight} />
        </Toolbar>
      </AppBar>
      <main>
          <div className={classes.container}>
              <Container maxWidth="sm">
              <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Search for Movies
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Cast your votes for the Shopify™ Movie of the Year!  Enter movie titles into the 
              search bar to nominate your favorite movie to be considered for this prestigious award.  
              
            </Typography>
            <Typography
                variant="h8"
                align="center"
                color="primary"
                paragraph>
                    Search engine powered by the OMDb API - The Open Movie Database.
                </Typography>

              </Container>
          </div>
      </main>
    </>
  );
};

export default App;
