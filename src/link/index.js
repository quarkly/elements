import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

const Link = styled('a')(
  themed('Link'),
  variant('links'),
  ...includeWith('defaults'),
  ...includeWith('text'),
  ...includeWith('hovered'),
);

export default Link;
