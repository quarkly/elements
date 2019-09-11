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
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'background',
    'opacity',
  ],
  variant: 'hrs',
  omit: getOmitProps(),
  normalize: true,
  mixins: true,
  aliases: true,
  propTypes: true,
});

export default Hr;
