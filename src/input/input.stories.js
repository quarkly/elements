import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Block from '../block';
import Input from './index';
import Theme from '../theme';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('basic', () => (
  <Theme>
    <Block bg="#252526" display="flex" alignItems="center" justifyContent="center">
      <Input />
    </Block>
  </Theme>
));
stories.add('white', () => (
  <Theme>
    <Input />
  </Theme>
));
stories.add('focus', () => (
  <Theme>
    <Input focusBgc="red" />
  </Theme>
));
