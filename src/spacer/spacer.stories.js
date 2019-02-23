import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Spacer from './index';
import Theme from '../theme';

const stories = storiesOf('Spacer', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Theme>
      Content
      <Spacer />
      Content
    </Theme>
  ))
  .add('variants', () => (
    <Theme>
      Content
      <Spacer variant="big" />
      Content
      <Spacer variant="small" />
      Content
    </Theme>
  ))
  .add('100px', () => (
    <Theme>
      Content
      <Spacer height={text('height', '100px')} />
      Content
    </Theme>
  ));
