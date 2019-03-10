import styled, { css } from 'styled-components';

const tooltipArrowTop = props =>
  props.placement === 'top' &&
  css`
    border-width: 5px 5px 0 5px;
    border-color: #222 transparent transparent transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  `;

const tooltipArrowBottom = props =>
  props.placement === 'bottom' &&
  css`
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent #222 transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  `;

const tooltipArrowRight = props =>
  props.placement === 'right' &&
  css`
    border-width: 5px 5px 5px 0;
    border-color: transparent #222 transparent transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  `;

const tooltipArrowLeft = props =>
  props.placement === 'left' &&
  css`
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #222;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  `;

export default styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  ${tooltipArrowTop};
  ${tooltipArrowRight};
  ${tooltipArrowBottom};
  ${tooltipArrowLeft};
`;
