import elementary from '@quarkly/elementary';

export const rules = ['backgroundColor', 'width', 'height', 'display', 'opacity']; // TODO брать из элементари

const Flex = elementary.div({
  name: 'Flex',
  variant: 'flexs',
  effects: {
    hover: ':hover',
  },
});

export default Flex;
