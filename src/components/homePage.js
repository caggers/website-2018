import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { theme1 } from '../theme/globalStyle';
import { sectionsArray  } from '../util/data';

import Profile from './profile';
import Splash from './splash';
import Experience from './experience';

const AppWrapper = styled.div`
    text-align: center;
    display: grid;
    grid-gap: 25px;
`

const AppHeader = styled.div`
//   color: ${props => props.theme.dark};
  grid-column: 1 / 1;
  grid-row: 1 / 3;
  padding: 1rem;
  margin: 15rem auto;
  width: 90%;
`

const AppIntroBackground = styled.div`
  // grid-column: 1 / 1;
  // grid-row: 3 / 3;
  // background-color: #23A6D5;
`

const AppIntro = styled.div`
  grid-column: 1 / 1;
  grid-row: 3 / 3;
  padding: 1rem;
  width: 90%;
  margin: auto;
`

const AppSection = styled.div`
  padding-top: 5%;
  padding: 1rem;
  margin: auto;
  width: 90%;

`

export default class HomePage extends Component {

  render() {
    return (
      <ThemeProvider theme={theme1}>
        <AppWrapper>
          <AppHeader>
            <Splash />
          </AppHeader>
          <AppIntroBackground>
            <AppIntro>
              <Profile data={sectionsArray[0]}/>
            </AppIntro>
          </AppIntroBackground>
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