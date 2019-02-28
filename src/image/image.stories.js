import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, select, number } from '@storybook/addon-knobs';
import Image from './index';
import Theme from '../theme';

const stories = storiesOf('Image', module);

stories.addDecorator(withKnobs);

stories.add('adaptive', () => (
  <Theme>
    <Image
      src={text('src', 'https://picsum.photos/500', 'Core')}
      p={text('p', [5, 10, 55], 'Core')}
      bg={['red', 'blue', 'yellow']}
      height="400px"
      width="500px"
    />
  </Theme>
));
stories.add('fluid', () => (
  <Theme>
    <Image src="https://picsum.photos/1800" variant="fluid" />
  </Theme>
));
stories.add('thumb', () => (
  <Theme>
    <Image src="https://picsum.photos/500" variant="thumb" />
  </Theme>
));

stories.add('with props', () => (
  <Theme>
    <Image
      p={text('p', '20px', 'Core')}
      pt={text('pt', '', 'Core')}
      pr={text('pr', '', 'Core')}
      pb={text('pb', '', 'Core')}
      pl={text('pl', '', 'Core')}
      px={text('px', '', 'Core')}
      py={text('py', '', 'Core')}
      m={text('m', '20px', 'Core')}
      mt={text('mt', '', 'Core')}
      mr={text('mr', '', 'Core')}
      mb={text('mb', '', 'Core')}
      ml={text('ml', '', 'Core')}
      mx={text('mx', '', 'Core')}
      my={text('my', '', 'Core')}
      src={text('src', 'https://picsum.photos/500', 'Core')}
      bg={color('bg', ['red', 'blue', 'yellow'], 'Core')}
      display={select(
        'display',
        {
          block: 'block',
          flex: 'flex',
          inline: 'inline',
          'inline-block': 'inline-block',
          grid: 'grid',
          none: 'none',
        },
        'block',
        'Layout',
      )}
      width={text('width', '400px', 'Layout')}
      minWidth={text('minWidth', '', 'Layout')}
      maxWidth={text('maxWidth', '', 'Layout')}
      height={text('height', '500px', 'Layout')}
      minHeight={text('minHeight', '', 'Layout')}
      maxHeight={text('maxHeight', '', 'Layout')}
      ratio={text('ratio', '', 'Layout')}
      border={text('border', '', 'Misc')}
      borderTop={text('borderTop', '', 'Misc')}
      borderRight={text('borderRight', '', 'Misc')}
      borderBottom={text('borderBottom', '', 'Misc')}
      borderLeft={text('borderLeft', '', 'Misc')}
      borderWidth={text('borderWidth', '', 'Misc')}
      borderStyle={select(
        'borderStyle',
        {
          none: 'none',
          solid: 'solid',
          hidden: 'hidden',
          dashed: 'dashed',
          dotted: 'dotted',
          double: 'double',
        },
        'solid',
        'Misc',
      )}
      borderColor={color('borderColor', '', 'Misc')}
      borderRadius={text('borderRadius', '', 'Misc')}
      opacity={number('opacity', '', 'Misc')}
      position={select(
        'position',
        {
          absolute: 'absolute',
          fixed: 'fixed',
          relative: 'relative',
          static: 'static',
          inherit: 'inherit',
        },
        'static',
        'Position',
      )}
      zIndex={text('zIndex', '', 'Position')}
      top={text('top', '', 'Position')}
      right={text('right', '', 'Position')}
      bottom={text('bottom', '', 'Position')}
      left={text('left', '', 'Position')}
    />
  </Theme>
));
