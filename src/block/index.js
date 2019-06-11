import elementary from '@quarkly/elementary';

const Block = elementary.section(
  {
    name: 'Block',
    variant: 'blocks',
    effects: {
      hover: ':hover',
    },
  },
  {
    boxSizing: 'border-box',
  },
);

export default Block;
