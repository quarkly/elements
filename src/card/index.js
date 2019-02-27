import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

export default styled('div')(
  themed('Card'),
  variant('cards'),
  ...includeWith('defaults'),
  ...includeWith('card'),
);
