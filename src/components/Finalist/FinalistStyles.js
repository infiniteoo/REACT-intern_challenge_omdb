import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  finalist: {
    border: "5px dotted black",
  },

    height: "400px",
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      display: "flex",
      flexFlow: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      marginRight: "20px",
    },
    buttons: {
      marginTop: "40px",
    },
    cardGrid: {
      padding: "20px 0px",
      display: "flex",
      flexFlow: "row",
      flexDirection: "row",
       flexWrap: "wrap", 
       justifyContent: "center",
      alignItems: "center", 
    },
    card: { 
        height: "100%", 
        display: "flex", 
        flexDirection: "row",
        paddingLeft: "10px",
        marginLeft: "5px"
    },
    cardMedia: { paddingTop: "56.25%" },
    cardContent: { flexGrow: 1 },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: "50px 0px",
    },
  
}))
