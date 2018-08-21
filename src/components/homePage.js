import React, { Component } from 'react';

import styled from 'styled-components';
import { sectionsArray } from '../util/data';
import debounce from 'lodash/debounce';
import { } from '../theme/globalStyle';

import Profile from './profile';
import Splash from './splash';
import Experience from './experience';
import Skills from '../skills/skills';

const AppWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 25px;
  grid-template-rows: 50% 0.4fr 0.6fr 1fr 0.05fr;
`

const AppHeader = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  margin: 5rem auto;
  width: 80%;
`

const AppIntro = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / 2;
  width: 80%;
  margin: auto;
`

const AppSection = styled.div`
  padding-top: 5%;
  margin: auto;
  width: 80%;
`

const AppSectionOne = styled.div`
  grid-column: 1 / 1;
  grid-row: 3 / 3;
`

const AppSectionTwoBG = styled.div`
  grid-column: 1 / 1;
  grid-row: 4 / 4;
  height: 500px;
  background: -webkit-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
`

const AppSectionTwo = styled.div`
  grid-column: 1 / 1;
  grid-row: 4 / 5;
`

const AppSectionThree = styled.div`
  background: -webkit-linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  text-align: center;
  color: white;
  padding: 0;
`
  ;

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: null,
      innerWidth: null
    };
  }

  componentDidMount() {
    this.checkForScreenWidth();
  }

  checkForScreenWidth = debounce(() => {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }, 1000);

  resize = (() => {
    this.setState({
      innerWidth: window.innerWidth,
      isMobile: window.innerWidth <= 780
    });
  });

  render() {
    const { isMobile, innerWidth } = this.state;
    return (
      <AppWrapper className="app-wrapper">
        <AppHeader className="app-header">
          <Splash className="splash"/>
        </AppHeader>

        <AppIntro className="app-intro">
          <Profile 
            data={sectionsArray[0]} 
            isMobile={isMobile} 
          />
        </AppIntro>

        <AppSectionOne className="app-section-one">
          <AppSection>
            <Experience 
              data={sectionsArray[1]} 
              isMobile={isMobile} 
              innerWidth={innerWidth} 
            />
          </AppSection>
        </AppSectionOne>

        <AppSectionTwoBG className="app-section-two-bg" />

        <AppSectionTwo className="app-section-two">
          <AppSection className="app-section-two-content">
            <Skills
              isMobile={isMobile} 
            />
          </AppSection>
        </AppSectionTwo>


        <AppSectionThree>
          <p>Handcrafted by me &#169; 2018 using React and styled-components</p>
        </AppSectionThree>

      </AppWrapper>
    );
  }
} 