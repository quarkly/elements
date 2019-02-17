import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './default';

export default props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>{props.children}</React.Fragment>
  </ThemeProvider>
);
