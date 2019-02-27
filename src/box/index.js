import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

export default styled('div')(
  {
    boxSizing: 'border-box',
  },
  ...includeWith('defaults'),
  themed('Box'),
  variant('boxes'),
);
