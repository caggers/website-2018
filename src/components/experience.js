import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import SectionHeader from './section/sectionHeader';
import SectionContent from './section/sectionContent';
import coderDojo from '../images/coder-dojo.jpg';
import { blogsArray } from '../util/data';

const ExperienceWrapper = styled.div`
  display: grid;
  grid-gap: 20px 20px;
`

const ExperienceTitle = styled.div`
  grid-column: 1 / 6;
  grid-row: 1 / 1;
  text-align: left;
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 1 / 2;
  `}

`

const ExperienceContent = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  text-align: left;
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 3 / 4;
  `}
`

const CoderDojoImg = styled.img`
  width: 95%;
  grid-column: 4 / 6;
  grid-row: 2 / 6;
  margin: auto;
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 5 / 6;
  `}
`

const ExperienceBlogs = styled.div`
  li {
    list-style: none;
    text-decoration: none;
    font-family: Josefin Slab;
    padding-top: 5px;
    a, a:active, a:hover, a:visited {
      color: #6A86FE;
    }
    a:active, a:hover {
      color: #B721FF;
    }
  }

`

export default class Experience extends React.Component {
  render() {
    const { title, icon, text } = this.props.data;
    const {  innerWidth, isMobile } = this.props;
    return (
      <ExperienceWrapper>
        <ExperienceTitle isMobile={isMobile}>
          <SectionHeader 
            title={title} 
            icon={icon}
          />
        </ExperienceTitle>
        <ExperienceContent isMobile={isMobile}>
          {text.map((item, i) =>
            <SectionContent content={item} key={i}/>
          )}
          <ExperienceBlogs>
            {blogsArray.map((item, i) => 
              <li key={i}>
                <a href={item.href}>{item.title}</a>
              </li>
            )}
          </ExperienceBlogs>
        </ExperienceContent>
        <CoderDojoImg 
          src={coderDojo} 
          alt="Me on stage" 
          isMobile={isMobile}
          innerWidth={innerWidth}
        />
      </ExperienceWrapper>
    );
  }
}

Experience.propTypes = {
  data: PropTypes.shape( {
    title: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.string),
  }),
  isMobile: PropTypes.bool,
  innerWidth: PropTypes.number
}