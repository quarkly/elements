import styled from 'styled-components';
import { includeWith } from '../styled';
import Box from '../box';

export default styled(Box)(...includeWith('flex'));
