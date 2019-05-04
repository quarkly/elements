import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

export default styled('select')(themed('Select'), variant('selects'), ...includeWith('defaults'));
