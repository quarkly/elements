import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './default';

export default props => (
  <ThemeProvider theme={props.theme || theme}>
    <React.Fragment>{props.children}</React.Fragment>
  </ThemeProvider>
);
