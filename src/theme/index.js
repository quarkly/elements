import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from './default';

export default props => (
  <ThemeProvider sheetsManager={props.sheetsManager || null} theme={props.theme || theme}>
    <React.Fragment>{props.children}</React.Fragment>
  </ThemeProvider>
);
