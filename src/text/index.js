import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';
import Box from '../box';

const Text = styled(Box)(themed('Text'), variant('texts'), ...includeWith('text'));

Text.defaultProps = {
  as: 'p',
};

export default Text;
