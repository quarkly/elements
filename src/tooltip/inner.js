import styled, { css } from 'styled-components';

const colors = props => ({
  color: props.color || 'red',
  backgroundColor: props.backgroundColor || 'black',
});

const padding = () => ({
  default: '3px',
});

const br = () => ({
  noRadius: '5px',
  pill: '5px',
  default: '5px',
});

const borderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'tooltipInner').noRadius};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${br(props, 'tooltipInner').pill};
    `;
  }

  return css`
    border-radius: ${br(props, 'tooltipInner').default};
  `;
};

const pill = props =>
  props.pill &&
  css`
    margin: -2px;
  `;

export default styled.div`
  max-width: 200px;
  padding: ${props => padding(props, 'tooltipInner').default}
  color: ${props => colors(props, 'tooltipInner').color};
  text-align: center;
  background-color: ${props => colors(props, 'tooltipInner').backgroundColor};
  ${props => borderRadius(props)}
  ${props => pill(props)}
`;
