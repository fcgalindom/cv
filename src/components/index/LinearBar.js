import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center'  , margin:'0' , padding:'0' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} sx={{'& .css-5xe99f-MuiLinearProgress-bar1': {
            backgroundColor:'#18d26e' // Cambia este valor por el color que prefieras
          },}} 
          style={{background:'rgba(255, 255, 255, 0.2)' , height:'8px' , color:'#18d26e !important'}} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="#fff">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel({name , valuet}) {
  const [progress, setProgress] = React.useState(10);

  const [getObetenP, setObtenP] = React.useState(false);

  React.useEffect(() => {

    progress >= valuet  && setObtenP(true)   
    
    const timer = setInterval(() => {
      setProgress((prevProgress) => (   prevProgress >= valuet
         ? 10 : prevProgress + 10));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    
  }, [getObetenP]);
  return (
    <Box sx={{ width: '100%' }}>

           
            <p style={{ margin:'0' , padding:'0' , fontSize: 'normal'}}>{name}</p>

        
     
           <LinearProgressWithLabel value={progress} /> 
      
      
    </Box>
  );
}
