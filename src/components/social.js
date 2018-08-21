import React from 'react';
import styled from 'styled-components';
import {linkedin, twitter, github} from '../images/icon/index';

const SocialWrapper = styled.div`

`

const SocialIcon = styled.img`
  height: 25px;
  width: 25px;
  padding: 20px;
  margin: 0 25px;
  background: #6A86FE;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

const Social = () => (
  <SocialWrapper>
    <a href="https://twitter.com/caggers">
      <SocialIcon src={twitter} />
    </a>
    <a href="https://github.com/caggers">
      <SocialIcon src={github}/>
    </a>
    <a href="https://www.linkedin.com/in/gemmacagney/">
      <SocialIcon src={linkedin}/>
    </a>
  </SocialWrapper>
);
   
export default Social;
