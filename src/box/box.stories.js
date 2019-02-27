import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Box from './index';
import Theme from '../theme';

const stories = storiesOf('Box', module);

stories.addDecorator(withKnobs);

stories.add('empty', () => (
  <Theme>
    <Box bg="red" size="200px" />
  </Theme>
));
