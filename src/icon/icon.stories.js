import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Icon from './index';
import Theme from '../theme';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Icon name="fa/FaBeer" color={['red', 'green', 'blue']} fontSize="300px" />
  </Theme>
));

stories.add('icon as prop', () => (
  <Theme>
    <Icon
      name={text('name', 'fa/FaFolder', 'fa/Folder')}
      color={['red', 'green', 'blue']}
      fontSize="300px"
    />
  </Theme>
));
