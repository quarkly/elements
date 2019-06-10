import { css } from 'styled-components';
import elementary from '@quarkly/elementary';

const tooltipArrowTop = props =>
  props.placement === 'top' &&
  css`
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  `;

const tooltipArrowBottom = props =>
  props.placement === 'bottom' &&
  css`
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  `;

const tooltipArrowRight = props =>
  props.placement === 'right' &&
  css`
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  `;

const tooltipArrowLeft = props =>
  props.placement === 'left' &&
  css`
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  `;

const Arrow = elementary.div(
  {
    styles: ['color'],
  },
  {
    width: 0,
    height: 0,
    'border-style': 'solid',
    position: 'absolute',
    margin: '5px',
  },
  tooltipArrowTop,
  tooltipArrowRight,
  tooltipArrowBottom,
  tooltipArrowLeft,
);

export default Arrow;
