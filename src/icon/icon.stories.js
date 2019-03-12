import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Icon from './index';
import Theme from '../theme';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Icon name="FaBeer" color={['red', 'green', 'blue']} fontSize="300px" />
  </Theme>
));
