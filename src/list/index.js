import React from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

const ENAME = 'LIST';
const uid = name => `${ENAME}${name}`;

const Ul = styled('ul')(
  {
    boxSizing: 'border-box',
  },
  themed('List'),
  variant('lists'),
  ...includeWith('defaults'),
  ...includeWith('text'),
);

const List = ({ children }) => {
  return (
    <Ul>
      {React.Children.map(children, (child, i) => {
        return <li key={uid(i)}>{child}</li>;
      })}
    </Ul>
  );
};

export default List;
