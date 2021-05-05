import React from "react";
import {
  Card,
  Typography,
  Grid,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import film from "../../assets/film.jpg";
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
          {/* Search Results */}
        </Typography>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              /*  alt={props.searchedMovie.title} */
              height="400px"
              image={film}
              title={"Enter movie titles on the left to see results!"}
              className={classes.cardpic}
              style={{ objectFit: "contain", padding: "10px" }}
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Enter movie titles on the left to begin searching!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {/*   {props.searchedMovie.plot} */}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SearchResult;
