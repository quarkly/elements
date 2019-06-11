import elementary from '@quarkly/elementary';

const Grid = elementary.div(
  {
    name: 'Grid',
    variant: 'grids',
    effects: {
      hover: ':hover',
    },
  },
  {
    display: 'grid',
  },
);

export default Grid;
