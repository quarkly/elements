import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

const Image = styled('div')(
  themed('Image'),
  variant('images'),
  ...includeWith('defaults'),
  ...includeWith('image'),
);

Image.defaultProps = {
  as: 'img',
};

export default Image;
