import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
  display: grid;
`

const Row = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 3rem;
  font-family: AmaticSC, sans-serif;
    &:after {
      content:' ';
      display:block;
      border-bottom: 1px solid black;
    }
`

const Icon = styled.img`
  padding: 0 15px 0 0;
  width: 25px;
`

const SectionHeader = ({title, icon}) => (
  <SectionHeaderWrapper>
    <Row>
      <Icon src={icon} alt="title icon"  />
      {title}
    </Row>
  </SectionHeaderWrapper>
);
   
export default SectionHeader;

SectionHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}