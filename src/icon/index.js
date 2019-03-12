import React from 'react';
import styled from 'styled-components';
import * as fa from 'react-icons/fa';
import { includeWith, themed, variant } from '../styled';

const Box = styled('span')(
  {
    boxSizing: 'border-box',
  },
  themed('Icon'),
  variant('icons'),
  ...includeWith('icon'),
);

export default props => {
  const { name, ...other } = props;
  const Icon = fa[name];
  return Icon ? (
    <Box {...other}>
      <Icon />
    </Box>
  ) : (
    <Box />
  );
};
