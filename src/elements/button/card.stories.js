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
      <Button />
      <Button p={[1, 200, 55]} display={['block', 'none', 'block']} variant="primary" />
      <Button />
    </Theme>
  ))
  .add('100px', () => (
    <Theme>
      <Button />
      <Button height={text('height', '100px')} />
      sss
      <Button height={[100, 20, 30]} />
      <Button />
    </Theme>
  ));
