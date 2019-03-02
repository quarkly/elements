import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './default';
import { asQuark } from '../quark';

const qStateDefault = {
  themes: {},
};

export default asQuark(props => {
  const { name } = props;
  const qState = props.qState || qStateDefault;
  let diTheme;
  if (name && qState.themes[name]) {
    diTheme = qState.themes[name];
  }
  return (
    <ThemeProvider theme={props.theme || diTheme || theme}>
      <React.Fragment>{props.children}</React.Fragment>
    </ThemeProvider>
  );
});
