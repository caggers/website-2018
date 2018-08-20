import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import profileImg from '../images/profile-pic.png';
import SectionHeader from './section/sectionHeader';
import SectionContent from './section/sectionContent';

const ProfileWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
`

const ProfilePic = styled.img`
  width: 250px;
  grid-column: 1 / 1;
  grid-row: 1 / 4;
  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 1 / 2;
    width: 60%;
    margin: auto;
  `}
`
const ProfileTitle = styled.div`
  grid-column: 2 / 6;
  grid-row: 1 / 1;
  text-align: left;

  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 3 / 4;
  `}
`

const ProfileContent = styled.div`
  grid-column: 2 / 6;
  grid-row: 2 / 4;
  text-align: left;

  ${props => props.isMobile && css`
    grid-column: 1 / 1;
    grid-row: 5 / 6;
  `}
`

const SectionSubtitle = styled.div`
  font-family: Josefin Slab Bold, Arial, Verdana, sans-serif;
  padding-top: 15px;
`

export default class Profile extends React.Component {

  render() {
    const { title, subtitle, icon, text } = this.props.data;
    return (
      <ProfileWrapper>
        <ProfilePic isMobile={this.props.isMobile} src={profileImg} alt="profile picture" />
        <ProfileTitle isMobile={this.props.isMobile} >
          <SectionHeader title={title} icon={icon}/>
          <SectionSubtitle>
            {subtitle}
          </SectionSubtitle>
        </ProfileTitle>
        <ProfileContent isMobile={this.props.isMobile}>
          <SectionContent content={text} />
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
    blogs: PropTypes.arrayOf(PropTypes.string),
  }),
  isMobile: PropTypes.bool,
}

