import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SectionHeader from './section/sectionHeader';
import SectionContent from './section/sectionContent';
import coderDojo from '../images/coder-dojo.jpg';

const ExperienceWrapper = styled.div`
  display: grid;
  grid-gap: 20px 20px;
`

const ExperienceTitle = styled.div`
  grid-column: 1 / 8;
  grid-row: 1 / 1;
  text-align: left;

`

const ExperienceContent = styled.div`
  grid-column: 1 / 4;
  grid-row: 2 / 4;
  text-align: left;

`

const CoderDojoImg = styled.img`
  width: 100%;
  grid-column: 5 / 8;
  grid-row: 2 / 6;
`

export default class Experience extends React.Component {

  render() {
    const { title, icon, text } = this.props.data;
    return (
      <ExperienceWrapper>
        <ExperienceTitle>
          <SectionHeader title={title} icon={icon}/>
        </ExperienceTitle>
        <ExperienceContent>
          {text.map((item, i) =>
            <SectionContent content={item} key={i}/>
          )}
        </ExperienceContent>
        <CoderDojoImg src={coderDojo} alt="Me on stage" />
      </ExperienceWrapper>
    );
  }

}

Experience.propTypes = {
  data: PropTypes.shape( {
    title: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.string)
  } )
}