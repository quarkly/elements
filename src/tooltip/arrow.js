import styled, { css } from 'styled-components';
import { includeWith } from '../styled';

const tooltipArrowTop = props =>
  props.placement === 'top' &&
  css`
    border-width: 5px 5px 0 5px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  `;

const tooltipArrowBottom = props =>
  props.placement === 'bottom' &&
  css`
    border-width: 0 5px 5px 5px;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  `;

const tooltipArrowRight = props =>
  props.placement === 'right' &&
  css`
    border-width: 5px 5px 5px 0;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  `;

const tooltipArrowLeft = props =>
  props.placement === 'left' &&
  css`
    border-width: 5px 0 5px 5px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
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
  ${includeWith('arrow')}
  ${tooltipArrowTop};
  ${tooltipArrowRight};
  ${tooltipArrowBottom};
  ${tooltipArrowLeft};
`;
