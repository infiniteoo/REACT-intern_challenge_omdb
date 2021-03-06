import React from "react";

import {
  Typography,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Button,
} from "@material-ui/core";

import CancelIcon from "@material-ui/icons/Cancel";

import useStyles from "./FinalistStyles.js";

const Finalist = (props) => {
  const classes = useStyles();

  const removeFinalist = (e) => {
    let arrayIndex = e.currentTarget.getAttribute("arialabel") - 1;
    console.log(arrayIndex);
    props.finalists.splice(arrayIndex, 1);
    console.log(
      "this should be the same array without that one Xed",
      props.finalists
    );

    props.setFinalists((oldArray) => [...props.finalists]);
  };
  return (
    <Grid container spacing={12}>
      <Grid item xs={1} sm={3} md={12}>
        <Card className={classes.card}>
          <Typography color="textPrimary" variant="h6">
            #{props.index}
            <br />
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            style={{ paddingLeft: "5px" }}
          >
            {props.title}
          </Typography>
          <CardMedia
            component="img"
            alt={props.title}
            height="100px"
            className={classes.cardMedia}
            image={props.poster}
            title={props.title}
            style={{ objectFit: "contain", padding: "10px" }}
          />
          <br />

          <CardActions>
            <Button
              size="small"
              color="secondary"
              ariaLabel={props.index}
              startIcon={<CancelIcon />}
              onClick={(e) => removeFinalist(e)}
            />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    /*   </Container> */
  );
};

export default Finalist;
