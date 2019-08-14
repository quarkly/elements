import { css } from 'styled-components';
import elementary from '@quarkly/elementary';
import { getOmitProps } from '../utils';

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

const Tooltip = elementary.div(
  {
    name: 'Tooltip',
    variant: 'tooltips',
    normalize: true,
    omit: getOmitProps(),
    mixins: true,
    aliases: true,
  },
  {
    color: 'white',
    width: '150px',
    'border-radius': '2px',
    'box-shadow': '0 0 2px rgba(0, 0, 0, 0.5)',
    padding: '5px',
  },
  tooltipTop,
  tooltipRight,
  tooltipBottom,
  tooltipLeft,
  hide,
);

export default Tooltip;
