import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Carousel from './index';
import Theme from '../theme';
import Button from '../button'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stories = storiesOf('Carousel', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Carousel dots bgHover={['red', 'yellow', 'tomato']} className={'ssssss'} bg={['lightgray', 'green', 'blue']}>
      <Button controls="right">right</Button>
      <Button controls="left">left</Button>
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
    </Carousel>
  </Theme>
));
