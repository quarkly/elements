import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Carousel from './index';
import Theme from '../theme';

const Button = props => <button {...props}>{props.children}</button>;
const stories = storiesOf('Carousel', module);
stories.addDecorator(withKnobs);
stories.add('default', () => (
  <Theme>
    <Carousel>
      <Button controls="left">Привет</Button>
      <Button controls="right">Как дела</Button>
    </Carousel>
  </Theme>
));
