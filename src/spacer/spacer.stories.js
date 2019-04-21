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
  .add('adaptive', () => (
    <Theme>
      Content
      <Spacer height={['100px', '200px', '400px']} />
      Content
    </Theme>
  ))
  .add('variants', () => (
    <Theme>
      Big
      <Spacer variant="big" />
      Small
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
  ))
  .add('50vh', () => (
    <Theme>
      Content
      <Spacer height={text('height', '50vh')} />
      Content
    </Theme>
  ))
  .add('25%', () => (
    <Theme>
      Content
      <Spacer height={text('height', '25%')} />
      Content
    </Theme>
  ))
  .add('10rem', () => (
    <Theme>
      Content
      <Spacer height={text('height', '10rem')} />
      Content
    </Theme>
  ));
