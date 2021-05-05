import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    border: "5px solid black",
  },
  root: {
    /*  maxWidth: 345, */
    backgroundColor: theme.palette.background.paper,

    display: "flex",
    flexFlow: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

    /* border: '5px solid black' */
  },
  media: {
    height: 140,
  },
  rightGrid: {
    /*   paddingLeft: "20px", */
  },
  searchButton: {
    marginTop: "5px",
  },
}));
