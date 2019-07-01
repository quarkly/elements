import elementary from '@quarkly/elementary';
import { getOmitProps } from '../utils';

const Hr = elementary.div({
  name: 'Hr',
  styles: [
    'variant',
    'display',
    'height',
    'minHeight',
    'maxHeight',
    'width',
    'minWidth',
    'maxWidth',
    'background',
    'opacity',
  ],
  variant: 'hrs',
  omit: getOmitProps(),
});

export default Hr;
