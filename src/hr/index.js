import elementary from '@quarkly/elementary';

export const rules = ['backgroundColor', 'width', 'height', 'display', 'opacity'];

const Hr = elementary.div({
  name: 'Hr',
  rules,
  variant: 'hrs',
});

export default Hr;
