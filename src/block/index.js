import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

export default styled('section')(
  {
    boxSizing: 'border-box',
  },
  themed('Block'),
  variant('blocks'),
  ...includeWith('box'),
);
