import React from 'react';
import { storiesOf } from '@storybook/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withKnobs, text } from '@storybook/addon-knobs';
import Spacer from './index';

const Button = () => <button>Hello</button>;
const theme = createMuiTheme();
const stories = storiesOf('Spacer', module);
stories.addDecorator(withKnobs);
stories
  .add('default', () => (
    <MuiThemeProvider theme={theme}>
      <Button />
      <Spacer />
      <Button />
    </MuiThemeProvider>
  ))
  .add('100px', () => (
    <MuiThemeProvider theme={theme}>
      <Button />
      <Spacer size={text('size', '100px')} />
      <Button />
    </MuiThemeProvider>
  ));
