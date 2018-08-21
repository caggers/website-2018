import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import SkillsColumn from './skillsColumn';
import { skillsArry } from '../../util/data';

const SkillsWrapper = styled.div`
  
`
const SkillsWidget = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid #DCDCDC;
  display: grid;
  grid-gap: 2.5%;
  grid-auto-columns: 1fr 1fr 1fr;
  padding: 50px 25px;
`

const SkillsHeader = styled.h2`
  font-family: AmaticSC, sans-serif;
  color: white;
  margin: 5% auto;
  font-size: 3rem;
`

const SkillsSectionOne = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  `}
`

const SkillsSectionTwo = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 2 / 2;
    border-top: 0.5px solid #DCDCDC;
  `}
`

const SkillsSectionThree = styled.div`
  grid-column: 3 / 3;
  grid-row: 1 / 1;
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 3 / 3;
    border-top: 0.5px solid #DCDCDC;
  `}
`

export default class Skills extends React.Component {
  render() {
    const { isMobile } = this.props;
    return (
      <SkillsWrapper className="skills-wrapper">
        <SkillsHeader className="skills-header">
          So What Do I Do?
        </SkillsHeader>
        <SkillsWidget className="skills-widget">
          <SkillsSectionOne 
            className="skills-section-one"
            isMobile={isMobile}
          >
            <SkillsColumn 
              data={skillsArry[0]} 
              isMobile={isMobile}
            />
          </SkillsSectionOne>
          <SkillsSectionTwo 
            className="skills-section-two"
            isMobile={isMobile}
          >
            <SkillsColumn 
              data={skillsArry[1]} 
              isMobile={isMobile}
            />
          </SkillsSectionTwo>
          <SkillsSectionThree 
            className="skills-section-three"
            isMobile={isMobile}
          >
            <SkillsColumn 
              data={skillsArry[2]} 
              isMobile={isMobile}
            />
          </SkillsSectionThree>
        </SkillsWidget>
      </SkillsWrapper>
    );
  }

}

Skills.propTypes = {
  isMobile: PropTypes.bool,
}