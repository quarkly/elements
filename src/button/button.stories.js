import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './index';
import Theme from '../theme';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Theme>
      <Button>default</Button>
      <Button variant="primary">primary</Button>
    </Theme>
  ));
