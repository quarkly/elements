import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, select, number, array } from '@storybook/addon-knobs';
import Image from './index';
import Theme from '../theme';

const stories = storiesOf('Image', module);

stories.addDecorator(withKnobs);

stories.add('adaptive', () => (
  <Theme>
    <Image
      src={text('src', 'https://picsum.photos/500', 'Core')}
      p={array('p', [5, 10, 55], 'Core')}
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
      paddingTop={text('paddingTop', '', 'Core')}
      paddingRight={text('paddingRight', '', 'Core')}
      paddingBottom={text('paddingBottom', '', 'Core')}
      paddingLeft={text('paddingLeft', '', 'Core')}
      px={text('px', '', 'Core')}
      py={text('py', '', 'Core')}
      m={text('m', '20px', 'Core')}
      marginTop={text('marginTop', '', 'Core')}
      marginRight={text('marginRight', '', 'Core')}
      marginBottom={text('marginBottom', '', 'Core')}
      marginLeft={text('marginLeft', '', 'Core')}
      mx={text('mx', '', 'Core')}
      my={text('my', '', 'Core')}
      src={text('src', 'https://picsum.photos/500', 'Core')}
      bg={array('bg', ['red', 'blue', 'yellow'], 'red', 'Core')}
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
      opacity={number('opacity', '', '{1}', 'Misc')}
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
      order={number('order', '', '{0}', 'Flexbox')}
      alignSelf={select(
        'alignSelf',
        {
          auto: 'auto',
          'flex-start': 'flex-start',
          'flex-end': 'flex-end',
          center: 'center',
          baseline: 'baseline',
          stretch: 'stretch',
        },
        'flex-start',
        'Flexbox',
      )}
      justifySelf={select(
        'justifySelf',
        {
          'flex-start': 'flex-start',
          'flex-end': 'flex-end',
          center: 'center',
          'space-between': 'space-between',
          'space-around': 'space-around',
          'space-evenly': 'space-evenly',
        },
        'flex-start',
        'Flexbox',
      )}
    />
  </Theme>
));
