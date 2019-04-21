import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

export default styled('ul')(
  {
    boxSizing: 'border-box',
  },
  themed('List'),
  variant('lists'),
  ...includeWith('defaults'),
  ...includeWith('text'),
);
