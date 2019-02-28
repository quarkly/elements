import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import Box from './index';
import Theme from '../theme';

const stories = storiesOf('Box', module);

stories.addDecorator(withKnobs);

stories.add('with props', () => (
  <Theme>
    <Box bg={text('Color', 'red')} size={text('Size', '200px')} />
  </Theme>
));

stories.add('with theme', () => (
  <Theme>
    <Box />
  </Theme>
));
