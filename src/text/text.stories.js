import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, color, select, number } from '@storybook/addon-knobs';
import Text from './index';
import Theme from '../theme';

const stories = storiesOf('Text', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Text variant="base">Base text</Text>
  </Theme>
));
stories.add('adaptive', () => (
  <Theme>
    <Text
      variant="display1"
      fontSize={['36px', '54px', '72px']}
      color={['black', 'gray', 'lightgrey']}>
      Display1
    </Text>
  </Theme>
));
stories.add('variants', () => (
  <Theme>
    <Text variant="display1">Display1</Text>
    <Text variant="display2">Display2</Text>
    <Text variant="display3">Display3</Text>
    <Text variant="display4">Display4</Text>
    <Text variant="h1">Heading1</Text>
    <Text variant="h2">Heading2</Text>
    <Text variant="h3">Heading3</Text>
    <Text variant="h4">Heading4</Text>
    <Text variant="h5">Heading5</Text>
    <Text variant="h6">Heading6</Text>
    <Text variant="lead">Lead paragraph</Text>
    <Text variant="base">Base text</Text>
  </Theme>
));
stories.add('with props', () => (
  <Theme>
    <Text
      variant={select(
        'variant',
        {
          display1: 'display1',
          display2: 'display2',
          display3: 'display3',
          display4: 'display4',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          lead: 'lead',
          base: 'base',
        },
        'base',
        'Core',
      )}
      color={color('color', 'black', 'Core')}
      bg={color('bg', '', 'Core')}
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
      fontSize={text('fontSize', '', 'Typography')}
      fontFamily={text('fontFamily', '', 'Typography')}
      textAlign={text('fontFamily', '', 'Typography')}
      lineHeight={text('lineHeight', '', 'Typography')}
      fontWeight={text('fontWeight', '', 'Typography')}
      fontStyle={text('fontStyle', '', 'Typography')}
      letterSpacing={text('letterSpacing', '', 'Typography')}
      boxShadow={text('boxShadow', '', 'Misc')}
      opacity={number('opacity', '', 'Misc')}
      overflow={select(
        'overflow',
        {
          visible: 'visible',
          hidden: 'hidden',
          scroll: 'scroll',
          auto: 'auto',
          inherit: 'inherit',
        },
        'visible',
        'Misc',
      )}
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
      left={text('left', '', 'Position')}>
      {text('Value', 'Some text...', 'Data')}
    </Text>
  </Theme>
));
