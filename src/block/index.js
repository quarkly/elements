import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

export default styled('div')(
  {
    boxSizing: 'border-box',
  },
  themed('Block'),
  variant('blocks'),
  ...includeWith('box'),
);
