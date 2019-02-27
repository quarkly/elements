import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';
import Box from '../box';

export default styled(Box)(themed('Card'), variant('cards'), ...includeWith('card'));
