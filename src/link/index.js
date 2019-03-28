import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

export default styled('a')(
  {
  },
  themed('Link'),
  variant('links'),
  ...includeWith('default, text, hovered'),
);
