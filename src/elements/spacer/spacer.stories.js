import React from 'react';
import { storiesOf } from '@storybook/react';
import Spacer from './index';

const Button = () => <button>Hello</button>;

storiesOf('Spacer', module)
  .add('default', () => (
    <div>
      <Button />
      <Spacer />
      <Button />
    </div>
  ))
  .add('100px', () => (
    <div>
      <Button />
      <Spacer size="100px" />
      <Button />
    </div>
  ));
