import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './index';
import Spacer from '../spacer';
import Theme from '../theme';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Button>{text('Label', 'Default')}</Button>
  </Theme>
));
stories.add('outline', () => (
  <Theme>
    <Button variant="outline">{text('Label', 'Outline')}</Button>
  </Theme>
));
