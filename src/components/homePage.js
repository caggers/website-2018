import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { theme1 } from '../theme/globalStyle';
import { sectionsArray  } from '../util/data';

import Profile from './profile';
import Splash from './splash';
import Experience from './experience';

const AppWrapper = styled.div`
    text-align: center;
    padding: 1rem;
    margin: 10rem auto 0 auto;
    width: 90%;
    display: grid;
    grid-gap: 20px 75px;
    grid-template-rows: 50em 20em 20em;
`

const AppHeader = styled.div`
    height: 100vh;
//   color: ${props => props.theme.dark};
//   background-color: ${props => props.theme.primary};
  grid-column: 1 / 1;
  grid-row: 1 / 3;
`

const AppIntro = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / 3;

`

const AppSection = styled.div`
  padding-top: 5%;
  grid-column: 1 / 1;
  grid-row: 3 / 3;

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
          <AppSection>
            <Experience data={sectionsArray[1]} />
          </AppSection>
          {/* <Button>Normal Button</Button>
          <Button primary>Primary Button</Button> */}
        </AppWrapper>
      </ThemeProvider>
    );
  }
} 