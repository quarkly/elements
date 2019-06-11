import React from 'react';
import elementary from '@quarkly/elementary';

const ENAME = 'LIST';
const uid = name => `${ENAME}${name}`;

const List = elementary.ul({
  name: 'List',
  variant: 'lists',
  effects: {
    hover: ':hover',
    focus: ':focus',
    active: ':active',
  },
});

const Ul = ({ children, ...other }) => {
  return (
    <List {...other}>
      {React.Children.map(children, (child, i) => {
        return <li key={uid(i)}>{child}</li>;
      })}
    </List>
  );
};

Ul.propTypes = List.propTypes;

export default Ul;
