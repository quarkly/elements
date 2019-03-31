import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

const Link = styled('div')(
  themed('Link'),
  variant('links'),
  ...includeWith('default'),
  ...includeWith('text'),
  ...includeWith('hovered'),
);

Link.defaultProps = {
  as: 'a',
};

export default Link;
