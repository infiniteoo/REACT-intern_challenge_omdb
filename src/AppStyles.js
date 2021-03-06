import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  /* container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6),
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        
        
      
     
    }, */
  pic: {
    borderRadius: "50%",
    height: "75%",
  },
  cardGrid: {
    padding: "20px 0px",
    display: "flex",
    flexFlow: "row",
    flexDirection: "row",
    /*  flexWrap: "wrap",  */
    /*  justifyContent: "center",
    alignItems: "center",  */
  },

  iconRight: {
    marginLeft: "20px",
    fontSize: "55px",
  },
  appBar: {
    background: "#2E3B55",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10px",
  },
}));
