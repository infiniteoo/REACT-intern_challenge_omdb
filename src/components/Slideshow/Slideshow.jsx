import React from 'react'
import useStyles from "./SlideshowStyles";

const Slideshow = (props) => {
    const classes = useStyles();
    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#ff9f29", "#ed29ff"];
    const delay = 5000;
    
    
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
          {/* <img src={props.finalists[0].poster} alt="" className="src"/> */}
          
              
            {colors.map((backgroundColor, index) => (
              <div
                className={classes.slide}
                key={index}
                style={{ backgroundColor }}
                
              ><img src={props.finalists[index].poster} alt="" className="src"/></div>
            ))}
          </div>
    
          <div className={classes.slideshowDots}>
            {colors.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      );
    
}

export default Slideshow
