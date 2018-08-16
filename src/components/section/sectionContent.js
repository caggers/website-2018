import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainText = styled.div`
  font-family: Josefin Slab, Arial, Verdana, sans-serif;
`

const SectionContent = ({content}) => (
  <MainText> {content}</MainText>
);
   
export default SectionContent;

SectionContent.propTypes = {
  content: PropTypes.string,
}