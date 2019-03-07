import styled, { css } from 'styled-components';

const padding = props =>
  props.left || props.right
    ? css`
        padding: 0px 0px 0px 5px;
      `
    : css`
        padding: 0 20px 20px 0;
      `;

const opacity = props =>
  props.hidden
    ? css`
        display: none;
      `
    : css`
        display: block;
      `;

export default styled.div`
  position: absolute;
  z-index: 1070;
  display: block;
  margin: null;
  font-family: 'Mono';
  font-style: normal;
  font-weight: 22;
  line-height: 1.5;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 20px;
  word-wrap: break-word;
  ${props => padding(props)};
  ${props => opacity(props)};
`;
