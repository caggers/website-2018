import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import profileImg from '../images/profile-pic.png';
import SectionHeader from './section/sectionHeader';
import SectionContent from './section/sectionContent';

const ProfileWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
`

const ProfilePic = styled.img`
  width: 100%;
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

export default class Profile extends React.Component {

  render() {
    const { title, subtitle, icon, text } = this.props.data;
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

