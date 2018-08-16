import React from 'react';
import styled, { keyframes } from 'styled-components';

const AnimateGradient = keyframes`
0% { background-position: 0% 50% }

50% { background-position: 100% 50% }

100% { background-position: 0% 50% }
`

const SplashWrapper = styled.div`
  font-family: AmaticSC, sans-serif;
  font-size: 6rem;
  font-weight: 300;
  text-align: center;

  background: -ms-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: -moz-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: -o-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: -webkit-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;

  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;

  -webkit-animation: ${AnimateGradient} 10s ease infinite;
  -ms-animation: ${AnimateGradient} 10s ease infinite;
  -moz-animation: ${AnimateGradient} 10s ease infinite;
  -o-animation: ${AnimateGradient} 10s ease infinite;
  animation: ${AnimateGradient} 10s ease infinite;
`

const Splash = () => (
  <SplashWrapper>
    <AnimateGradient>
      My name is Gemma, I make things. I&#39;m a Web Dev by day
      and a DIY electronics and wearables enthusiast by night.
    </AnimateGradient>
  </SplashWrapper>
);
   
export default Splash;
