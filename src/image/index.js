import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';
import Box from '../box';

const Image = styled(Box)(themed('Image'), variant('images'), ...includeWith('image'));

Image.defaultProps = {
  as: 'img',
};

export default Image;
