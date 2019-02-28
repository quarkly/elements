import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, color, array, select } from '@storybook/addon-knobs';
import Block from './index';
import Box from '../box';
import Theme from '../theme';

const stories = storiesOf('Block', module);

stories.addDecorator(withKnobs);

stories.add('with theme', () => (
  <Theme>
    <Block />
  </Theme>
));

stories.add('with props', () => (
  <Theme>
    <Block
      p={text('p', '20px', 'Core')}
      pt={text('pt', ' ', 'Core')}
      pr={text('pr', ' ', 'Core')}
      pb={text('pb', ' ', 'Core')}
      pl={text('pl', ' ', 'Core')}
      px={text('px', ' ', 'Core')}
      py={text('py', ' ', 'Core')}
      m={text('m', '20px', 'Core')}
      mt={text('mt', ' ', 'Core')}
      mr={text('mr', ' ', 'Core')}
      mb={text('mb', ' ', 'Core')}
      ml={text('ml', ' ', 'Core')}
      mx={text('mx', ' ', 'Core')}
      my={text('my', ' ', 'Core')}
      bg={color('color', 'lightslategrey', 'Core')}
      display={text('display', 'block', 'Layout')}
      size={text('size', ' ', 'Layout')}
      width={text('width', '300px', 'Layout')}
      minWidth={text('minWidth', ' ', 'Layout')}
      maxWidth={text('maxWidth', ' ', 'Layout')}
      height={text('height', '300px', 'Layout')}
      minHeight={text('minHeight', ' ', 'Layout')}
      maxHeight={text('maxHeight', ' ', 'Layout')}
      background={text('background', ' ', 'Background')}
      backgroundImage={text('backgroundImage', 'url()', 'Background')}
      backgroundSize={select(
        'backgroundSize',
        {
          auto: 'auto',
          cover: 'cover',
          contain: 'contain',
        },
        'auto',
        'Background',
      )}
      backgroundPosition={select(
        'backgroundPosition',
        {
          'top left': 'top left',
          'top center': 'top center',
          'top right': 'top right',
          'center left': 'center left',
          'center center': 'center center',
          'center right': 'center right',
          'bottom left': 'bottom left',
          'bottom center': 'bottom center',
          'bottom right': 'bottom right',
          inherit: 'inherit',
        },
        'center center',
        'Background',
      )}
      backgroundRepeat={select(
        'backgroundRepeat',
        {
          'no-repeat': 'no-repeat',
          repeat: 'repeat',
          'repeat-x': 'repeat-x',
          'repeat-y': 'repeat-y',
          space: 'space',
          round: 'round',
          inherit: 'inherit',
        },
        'no-repeat',
        'Background',
      )}
      border={text('border', ' ', 'Misc')}
      borderTop={text('borderTop', ' ', 'Misc')}
      borderRight={text('borderRight', ' ', 'Misc')}
      borderBottom={text('borderBottom', ' ', 'Misc')}
      borderLeft={text('borderLeft', ' ', 'Misc')}
      borderWidth={text('borderWidth', ' ', 'Misc')}
      borderStyle={select(
        'borderStyle',
        {
          none: 'none',
          hidden: 'hidden',
          dotted: 'dotted',
          dashed: 'dashed',
          double: 'double',
          solid: 'solid',
        },
        'solid',
        'Misc',
      )}
      borderColor={color('borderColor', ' ', 'Misc')}
      borderRadius={text('borderRadius', ' ', 'Misc')}
      boxShadow={text('boxShadow', ' ', 'Misc')}
      opacity={number('opacity', ' ', 'Misc')}
      overflow={select(
        'overflow',
        {
          visible: 'visible',
          hidden: 'hidden',
          scroll: 'scroll',
          dashed: 'dashed',
          auto: 'auto',
          inherit: 'inherit',
        },
        'visible',
        'Misc',
      )}
      position={text('position', ' ', 'Position')}
      zIndex={text('zIndex', ' ', 'Position')}
      top={text('top', ' ', 'Position')}
      right={text('right', ' ', 'Position')}
      bottom={text('bottom', ' ', 'Position')}
      left={text('left', ' ', 'Position')}>
      <Box width="100px" height="100px" color="black" />
    </Block>
  </Theme>
));
