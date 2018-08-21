import styled, { injectGlobal, css } from 'styled-components';
import AmaticSC from './fonts/AmaticSC-Regular.ttf';
import AmaticBold from './fonts/AmaticSC-Bold.ttf';
import JosefinSlab from './fonts/JosefinSlab-Regular.ttf';
import JosefinSlabBold from './fonts/JosefinSlab-Bold.ttf';


injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: Josefin Slab, sans-serif;
    font-size: 1.2rem;
    line-height: 1.1;
  }
  @font-face {
    font-family: AmaticSC;
    src: url(${AmaticSC});
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: AmaticSC;
    src: url(${AmaticSC});
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: AmaticSC Bold;
    src: url(${AmaticBold});
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Josefin Slab;
    src: url(${JosefinSlab});
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Josefin Slab Bold;
    src: url(${JosefinSlabBold});
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
  }
  `;

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
`
    