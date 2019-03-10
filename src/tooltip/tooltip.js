import styled, { css } from 'styled-components';
import { includeWith, themed, variant } from '../styled';

const tooltipTop = props =>
  props.placement === 'top' &&
  css`
    margin-bottom: 5px;
  `;

const tooltipBottom = props =>
  props.placement === 'bottom' &&
  css`
    margin-top: 5px;
  `;

const tooltipRight = props =>
  props.placement === 'right' &&
  css`
    margin-left: 5px;
  `;

const tooltipLeft = props =>
  props.placement === 'left' &&
  css`
    margin-right: 5px;
  `;

const hide = props =>
  props.hidden
    ? css`
        display: none;
      `
    : css`
        display: block;
      `;

export default styled.div`
  background: #222;
  color: white;
  width: 150px;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 5px;
  ${includeWith('defaults')}
  ${themed('Tooltip')}
  ${variant('tooltips')}
  ${tooltipTop}
  ${tooltipBottom}
  ${tooltipRight}
  ${tooltipLeft}
  ${hide}
`;
