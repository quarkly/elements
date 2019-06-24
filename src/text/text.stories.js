import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, select, number } from '@storybook/addon-knobs';
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
      bg={color('background', '', 'Core')}
      p={text('padding', '', 'Core')}
      paddingTop={text('paddingTop', '', 'Core')}
      paddingRight={text('paddingRight', '', 'Core')}
      paddingBottom={text('paddingBottom', '', 'Core')}
      paddingLeft={text('paddingLeft', '', 'Core')}
      px={text('paddingX', '', 'Core')}
      py={text('paddingY', '', 'Core')}
      m={text('margin', '', 'Core')}
      marginTop={text('marginTop', '', 'Core')}
      marginRight={text('marginRight', '', 'Core')}
      marginBottom={text('marginBottom', '', 'Core')}
      marginLeft={text('marginLeft', '', 'Core')}
      mx={text('marginX', '', 'Core')}
      my={text('marginY', '', 'Core')}
      fontSize={text('fontSize', '', 'Typography')}
      fontFamily={text('fontFamily', '', 'Typography')}
      textAlign={select(
        'textAlign',
        {
          center: 'center',
          justify: 'justify',
          left: 'left',
          right: 'right',
        },
        'left',
        'Typography',
      )}
      lineHeight={text('lineHeight', '', 'Typography')}
      fontWeight={select(
        'fontWeight',
        {
          bold: 'bold',
          bolder: 'bolder',
          lighter: 'lighter',
          normal: 'normal',
          100: '100',
          200: '200',
          300: '300',
          400: '400',
          500: '500',
          600: '600',
          700: '700',
          800: '800',
          900: '900',
        },
        'normal',
        'Typography',
      )}
      fontStyle={select(
        'fontStyle',
        {
          normal: 'normal',
          italic: 'italic',
        },
        'normal',
        'Typography',
      )}
      letterSpacing={text('letterSpacing', '', 'Typography')}
      boxShadow={text('boxShadow', '', 'Misc')}
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
      opacity={number('opacity', '', '{1}', 'Misc')}
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
      zIndex={number('zIndex', 1, 'Position')}
      top={text('top', '', 'Position')}
      right={text('right', '', 'Position')}
      bottom={text('bottom', '', 'Position')}
      left={text('left', '', 'Position')}>
      {text('Value', 'Some text...', 'Data')}
    </Text>
  </Theme>
));
