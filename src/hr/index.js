import styled from 'styled-components';
import { themed, variant, includeWith } from '../styled';

const Hr = styled('div')(themed('Hr'), variant('hrs'), ...includeWith('hr'));

export default Hr;
