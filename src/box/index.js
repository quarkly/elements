import elementary from '@quarkly/elementary';

const Box = elementary.div({
  name: 'Box',
  variant: 'boxes',
  effects: {
    hover: ':hover',
  },
});

export default Box;
