import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Text from './index';
import Theme from '../theme';

const stories = storiesOf('Text', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Theme>
      <Text>Lorem ....</Text>
      <Text>Lorem ....</Text>
      <Text>Lorem ....</Text>
      <Text>Lorem ....</Text>
    </Theme>
  ));
