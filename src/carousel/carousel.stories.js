import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, select, color } from '@storybook/addon-knobs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './index';
import Theme from '../theme';
import Block from '../block';
import Button from '../button';
import Image from '../image';

const stories = storiesOf('Carousel', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Carousel
      dots
      bgHover={['red', 'yellow', 'tomato']}
      className={'ssssss'}
      bg={['lightgray', 'green', 'blue']}>
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
stories.add('with images', () => (
  <Theme>
    <Carousel dots className={'ssssss'} bg={['lightgray', 'green', 'blue']} height={'300px'}>
      <Image
        src="https://images.unsplash.com/photo-1534062518571-b4d839eac102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
        variant="fluid"
      />
      <Image
        src="https://images.unsplash.com/photo-1524287529435-c725bae6d835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
        variant="fluid"
      />
      <Image
        src="https://images.unsplash.com/photo-1528117675829-27dd4bd7a241?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
        variant="fluid"
      />
    </Carousel>
  </Theme>
));
stories.add('with custom blocks', () => (
  <Theme>
    <Carousel dots className={'ssssss'} width={'300px'} height={'300px'}>
      <Block
        display={'block'}
        width={'100%'}
        height={'300px'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1534062518571-b4d839eac102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
        }>
        <Button>Button</Button>
      </Block>
      <Block
        display={'block'}
        width={'100%'}
        height={'300px'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1534062518571-b4d839eac102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
        }>
        <Button>Button</Button>
      </Block>
    </Carousel>
  </Theme>
));
stories.add('with props', () => (
  <Theme>
    <Carousel
      dots
      // bgHover={['red', 'yellow', 'tomato']}
      // className={'ssssss'}
      // bg={['lightgray', 'green', 'blue']}
      // height={'300px'}
      variant={select(
        'variant',
        {
          display1: 'display1',
        },
        'base',
        'Core',
      )}
      p={text('p', '', 'Core')}
      pt={text('pt', '', 'Core')}
      pr={text('pr', '', 'Core')}
      pb={text('pb', '', 'Core')}
      pl={text('pl', '', 'Core')}
      px={text('px', '', 'Core')}
      py={text('py', '', 'Core')}
      m={text('m', '', 'Core')}
      mt={text('mt', '', 'Core')}
      mr={text('mr', '', 'Core')}
      mb={text('mb', '', 'Core')}
      ml={text('ml', '', 'Core')}
      mx={text('mx', '', 'Core')}
      my={text('my', '', 'Core')}
      bg={color('bg', 'white', 'Core')}
      display={select(
        'display',
        {
          block: 'block',
          inline: 'inline',
          'inline-block': 'inline-block',
          none: 'none',
        },
        'block',
        'Layout',
      )}
      size={text('size', '', 'Layout')}
      width={text('width', '', 'Layout')}
      minWidth={text('minWidth', '', 'Layout')}
      maxWidth={text('maxWidth', '', 'Layout')}
      height={text('height', '', 'Layout')}
      minHeight={text('minHeight', '', 'Layout')}
      maxHeight={text('maxHeight', '', 'Layout')}>
      <Image
        src="https://images.unsplash.com/photo-1534062518571-b4d839eac102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
        variant="fluid"
      />
      <Image
        src="https://images.unsplash.com/photo-1524287529435-c725bae6d835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
        variant="fluid"
      />
      <Image
        src="https://images.unsplash.com/photo-1528117675829-27dd4bd7a241?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
        variant="fluid"
      />
    </Carousel>
  </Theme>
));
