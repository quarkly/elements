import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

export default styled('option')(themed('Option'), variant('options'), ...includeWith('defaults'));
