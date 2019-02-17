import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Spacer from './index';
import Theme from '../theme';

const Button = () => <button>Hello</button>;
const stories = storiesOf('Spacer', module);
stories.addDecorator(withKnobs);
stories
  .add('default', () => (
    <Theme>
      <Button />
      <Spacer height="11px" variant="primary" />
      <Button />
    </Theme>
  ))
  .add('100px', () => (
    <Theme>
      <Button />
      <Spacer height={text('height', '100px')} />
      sss
      <Spacer height="10px" />
      <Button />
    </Theme>
  ));
