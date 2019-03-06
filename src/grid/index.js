import styled from 'styled-components';
import { includeWith } from '../styled';

export default styled('div')({ display: 'grid' }, ...includeWith('box'));
