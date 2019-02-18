import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Image from './index';
import Theme from '../theme';

const Button = () => <button>Hello</button>;
const stories = storiesOf('Image', module);
stories.addDecorator(withKnobs);
stories
  .add('default', () => (
    <Theme>
      <Button />
      <Image
        src="https://picsum.photos/500"
        p={[1, 200, 55]}
        display={['block', 'none', 'block']}
        variant="primary"
      />
      <Button />
    </Theme>
  ))
  .add('100px', () => (
    <Theme>
      <Button />
      <Image src="https://picsum.photos/500" height={text('height', '100px')} />
      sss
      <Image src="https://picsum.photos/500" height={[100, 20, 30]} />
      <Button />
    </Theme>
  ));
