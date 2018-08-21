import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const AnimateGradient = keyframes`
0% { background-position: 0% 50% }

50% { background-position: 100% 50% }

100% { background-position: 0% 50% }
`

const Speed = props => props.speed || '15s';

const BackgroundWrapper = styled.div.attrs({
  height: props => props.height || '500px',
})`
  height: ${props => props.height};

  background: -ms-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: -moz-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: -o-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: -webkit-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;

  -webkit-animation: ${AnimateGradient} ${Speed} ease infinite;
  -ms-animation: ${AnimateGradient} ${Speed} ease infinite;
  -moz-animation: ${AnimateGradient} ${Speed} ease infinite;
  -o-animation: ${AnimateGradient} ${Speed} ease infinite;
  animation: ${AnimateGradient} ${Speed} ease infinite;
`

const AnimatedBackground = (props) => (
  <BackgroundWrapper 
    height={props.height}
    speed={props.speed}
  >
    <AnimateGradient>
    </AnimateGradient>
  </BackgroundWrapper>
);
   
export default AnimatedBackground;

AnimatedBackground.propTypes = {
  height: PropTypes.string,
  speed: PropTypes.string
}
