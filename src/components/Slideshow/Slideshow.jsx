import React from 'react'
import useStyles from "./SlideshowStyles";
import {Box, Typography} from '@material-ui/core'

const Slideshow = (props) => {
    const classes = useStyles();
    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#ff9f29","#FFBB28"];
    const delay = 3000;
    
    
      const [index, setIndex] = React.useState(0);
      const timeoutRef = React.useRef(null);
    
      function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
      React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);
    
      return (
        <div className={classes.slideshow}>
          <div
            className={classes.slideshowSlider}
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
        
          
              
            {colors.map((backgroundColor, index) => (
              <>
              
              <div
                className={classes.slide}
                key={index}
                style={{ backgroundColor }}
                
              >
              <Typography variant="h3" align="center" color="textSecondary">
                  {props.finalists[index].title}
              </Typography>
                <img src={props.finalists[index].poster} alt="" className="src" height="400"/>
                <Typography variant="h2" align="center">#{index+1}</Typography>
                
                <Typography variant="h3" align="center" color="secondary">Shopify</Typography>
                <Typography variant="h4" align="center" color="textSecondary">Movie of the Year</Typography>
                <Typography variant="h4" align="center" color="primary">Nominee!</Typography>
                
              </div>
              </>
            ))}
          </div>
    
         
        </div>
      );
    
}

export default Slideshow
