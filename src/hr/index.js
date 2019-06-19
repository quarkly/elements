import elementary from '@quarkly/elementary';

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
    'bg',
    'opacity',
  ],
  variant: 'hrs',
});

export default Hr;
