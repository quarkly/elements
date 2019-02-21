import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Carousel from './index';
import Theme from '../theme';

const stories = storiesOf('Carousel', module);
stories.addDecorator(withKnobs);
stories.add('default', () => (
  <Theme>
    <Carousel bgHover={['red', 'yellow']} className={'ssssss'} bg={['lightgray', 'green', 'blue']}>
      <p>Hello from slider</p>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
    </Carousel>
  </Theme>
));
