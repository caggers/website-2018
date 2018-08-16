import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { theme1 } from '../theme/globalStyle';
import { sectionsArray  } from '../util/data';

import Profile from './profile';
import Splash from './splash';

const AppWrapper = styled.div`
    text-align: center;
    padding: 1rem;
    // margin: 5% 10%;
    margin: 5% auto;
    width: 1080px;
`

const AppHeader = styled.div`
    height: 100vh;
//   color: ${props => props.theme.dark};
//   background-color: ${props => props.theme.primary};
`

const AppIntro = styled.div`

`

export default class HomePage extends Component {

  render() {
    return (
      <ThemeProvider theme={theme1}>
        <AppWrapper>
          <AppHeader>
            <Splash />
          </AppHeader>
          <AppIntro>
            <Profile data={sectionsArray[0]}/>
            
          </AppIntro>
          {/* <Button>Normal Button</Button>
          <Button primary>Primary Button</Button> */}
        </AppWrapper>
      </ThemeProvider>
    );
  }
} 