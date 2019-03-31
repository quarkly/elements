import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

<<<<<<< HEAD
const Link = styled('div')(
  themed('Link'),
  variant('links'),
  ...includeWith('default'),
  ...includeWith('text'),
  ...includeWith('hovered'),
=======
export default styled('a')(
  {},
  themed('Link'),
  variant('links'),
  ...includeWith('defaults'),
  ...includeWith('text'),
>>>>>>> f9e1609d6de0deebcf607e8079d67ebfb4d77b66
);

Link.defaultProps = {
  as: 'a',
};

export default Link;
