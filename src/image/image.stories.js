import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Image from './index';
import Theme from '../theme';

const stories = storiesOf('Image', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Image
      src="https://picsum.photos/500"
      p={[5, 10, 55]}
      bg={['red', 'blue', 'yellow']}
      variant="primary"
      height="400px"
      width="500px"
    />
  </Theme>
));
