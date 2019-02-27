import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';
import Box from '../box';

const Spacer = styled(Box)(themed('Spacer'), variant('spacers'), ...includeWith('spacer'));

export default Spacer;
