import styled from 'styled-components';
import { includeWith } from '../styled';

export default styled('div')({ display: 'flex' }, 
  themed('Flex'),
  variant('flexes'),
...includeWith('box'));
