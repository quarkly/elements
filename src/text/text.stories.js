import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Text from './index';
import Theme from '../theme';

const Button = () => <button>Hello</button>;
const stories = storiesOf('Text', module);
stories.addDecorator(withKnobs);
stories
  .add('default', () => (
    <Theme>
      <Button />
      <Text p={[1, 200, 55]} display={['block', 'none', 'block']} variant="primary" />
      <Button />
    </Theme>
  ))
  .add('100px', () => (
    <Theme>
      <Button />
      <Text height={text('height', '100px')}> привет</Text>
      sss
      <Text height={[100, 20, 30]} />
      <Button />
    </Theme>
  ));
