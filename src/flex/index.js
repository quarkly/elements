import elementary from '@quarkly/elementary';

const Flex = elementary.div(
  {
    name: 'Flex',
    variant: 'flexs',
    effects: {
      hover: ':hover',
    },
  },
  {
    display: 'flex',
  },
);

export default Flex;
