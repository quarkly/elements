import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Video from './index';
import Theme from '../theme';

const stories = storiesOf('Video', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Video src="https://www.youtube.com/watch?v=c6t3bW7kx6E" width="100%" height="auto" />
));
