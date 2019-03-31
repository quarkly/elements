import React from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

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
        return <li key={i}>{child}</li>;
      })}
    </Ul>
  );
};

export default List;
