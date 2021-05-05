import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  /* Slideshow */

slideshow: {
  margin: "0 auto",
  overflow: "hidden",
  maxWidth: "500px"
},

slideshowSlider: {
  whiteSpace: "nowrap",
  transition: "ease 1000ms"
},

slide: {
  display: "inline-block",
  height: "400px",
  width: "100%",
  bordeRadius: "30%"
},

/* Buttons */

slideshowDots: {
  textAlign: "center"
},

slideshowDot: {
  display: "inline-block",
  height: "20px",
  width: "20px",
  bordeRadius: "50%",
  cursor: "pointer",
  margin: "15px 7px 0px",
  backgroundColor: "#c4c4c4"
},

"slideshowDot.active": {
  backgroundColor: "#6a0dad"
}
}));
