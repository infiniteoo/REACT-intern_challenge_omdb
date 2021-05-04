import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6),
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    
    searchButton: {
        margin: '10px 0px 10px 0px'
    },
    
    awardPic: {
        height: "300px",
        paddingTop: "10px",
        borderRadius: "20px",
        paddingRight: "5px"
    },

    span: {
        fontWeight: "bold"
    }
}))