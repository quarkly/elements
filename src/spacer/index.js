import styled from 'styled-components';
import { themed, variant, includeWith } from '../styled';

const Spacer = styled('div')(themed('Spacer'), variant('spacers'), ...includeWith('defaults'));

export default Spacer;
