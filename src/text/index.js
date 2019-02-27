import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

const Text = styled('div')(
  themed('Text'),
  variant('texts'),
  ...includeWith('defaults'),
  ...includeWith('text'),
);

Text.defaultProps = {
  as: 'p',
};

export default Text;
