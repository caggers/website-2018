import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import profileImg from '../images/profile-pic.png';
import coderDojo from '../images/coder-dojo.jpg';
import SectionHeader from './section/sectionHeader';
import SectionContent from './section/sectionContent';

const ProfileWrapper = styled.div`
  display: grid;
  grid-gap: 20px 75px;
`

const ProfilePic = styled.img`
  height: 300px;
  grid-column: 1 / 1;
  grid-row: 1 / 4;
`
const ProfileTitle = styled.div`
  grid-column: 2 / 6;
  grid-row: 1 / 1;
  text-align: left;
`

const ProfileContent = styled.div`
  grid-column: 2 / 6;
  grid-row: 2 / 4;
  text-align: left;
`

const SectionSubtitle = styled.div`
  font-family: Josefin Slab Bold, Arial, Verdana, sans-serif;
  padding-top: 15px;

`

const ExtraContent = styled.div`
  font-family: Josefin Slab, Arial, Verdana, sans-serif;
  padding-top: 15px;
`

const CoderDojoImg = styled.img`
  width: 75%;
  margin: 5% 10%
`


export default class Profile extends React.Component {

  render() {
    const { title, subtitle, icon, text, blogs } = this.props.data;
    return (
      <ProfileWrapper>
        <ProfilePic src={profileImg} alt="profile picture" />
        <ProfileTitle>
          <SectionHeader title={title} icon={icon}/>
          <SectionSubtitle>
            {subtitle}
          </SectionSubtitle>
        </ProfileTitle>
        <ProfileContent>
          <SectionContent content={text} />
          <ExtraContent>
            I am passionate about technology and reaching out to the next generation of women in Tech.
            I’ve written some blogs about my experiences so far which you can read
            <a href={blogs[0]}> here </a>,
            <a href={blogs[1]}> here </a>, and
            <a href={blogs[2]}> here </a>.
            I am really proud of my work with Coder Dojo; two ninjas I mentored went on to win European Digital Girl of the year in 2017 and in May 2018 I spoke on a panel at Coolest Projects.
            {/* <CoderDojoImg src={coderDojo} alt="Me on stage" /> */}
          </ExtraContent>
        </ProfileContent>
      </ProfileWrapper>
    );
  }

}

Profile.propTypes = {
  data: PropTypes.shape( {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    blogs: PropTypes.arrayOf(PropTypes.string)
  } )
}

