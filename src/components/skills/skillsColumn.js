import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-rows: 1.3fr 1fr 1fr;
`

const Icon = styled.img`
  height: 50px;
  width: 50px;
  margin: 0 auto;
`

const Header = styled.h3`
  font-family:  AmaticSC, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
`

const Text = styled.p`
  margin: 0 auto;
`

const SkillsList = styled.div`
  list-style-type: none;

`

const SubTitle = styled.h4`
  font-family:  AmaticSC, sans-serif;
  font-size: 1.75rem;
  color: #6A86FE;
`

export default class SkillsColumn extends React.Component {
  render() {
    const {title, icon, subtitle, text, skills} = this.props.data;
    return (
      <Wrapper 
        className="skills-widget-wrapper"
      >
        <Icon src={icon} />
        <Header>{title} </Header>
        <Text>{text}</Text>
        <SkillsList>
          <SubTitle>{subtitle}</SubTitle>
          {skills.map((item, i) => 
            <li key={i}>
              {item}
            </li>
          )}
        </SkillsList>
      </Wrapper>
    );
  }

}

SkillsColumn.propTypes = {
  data: PropTypes.shape( {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
  }),
  isMobile: PropTypes.bool
}