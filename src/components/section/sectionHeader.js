import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
  display: grid;
`

const Row = styled.h3.attrs({
  color: props => props.colourFont || 'black',
  borderColor: props => props.colourBorder || 'black'
})`
  margin: 0;
  color: ${props => props.colourFont};
  font-weight: 300;
  font-size: 3rem;
  font-family: AmaticSC, sans-serif;
    &:after {
      content:' ';
      display:block;
      border-bottom: 1px solid;
      border-color: ${props => props.colourBorder};
    }
`

const Icon = styled.img`
  padding: 0 15px 0 0;
  width: 25px;
`

const SectionHeader = ({title, icon, colourBorder, colourFont}) => (
  <SectionHeaderWrapper>
    <Row colourBorder={colourBorder} colourFont={colourFont}>
      <Icon src={icon} alt="title icon"  />
      {title}
    </Row>
  </SectionHeaderWrapper>
);
   
export default SectionHeader;

SectionHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  colourFont: PropTypes.string,
  colourBorder: PropTypes.string,
}