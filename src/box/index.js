import elementary from '@quarkly/elementary';

export const rules = ['backgroundColor', 'width', 'height', 'display', 'opacity']; // TODO брать из элементари

const Box = elementary.div({
  name: 'Box',
  variant: 'boxes',
  effects: {
    hover: ':hover',
  },
});

export default Box;
