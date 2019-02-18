import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Card from './index';
import Theme from '../theme';

const Button = () => <button>Hello</button>;
const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);
stories
  .add('default', () => (
    <Theme>
      <Button />
      <Card p={[1, 200, 55]} display={['block', 'none', 'block']} variant="primary" />
      <Button />
    </Theme>
  ))
  .add('100px', () => (
    <Theme>
      <Button />
      <Card height={text('height', '100px')} />
      sss
      <Card height={[100, 20, 30]} />
      <Button />
    </Theme>
  ));
