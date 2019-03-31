import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, color, select } from '@storybook/addon-knobs';
import Link from './index';
import Theme from '../theme';

const stories = storiesOf('Link', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Link href="https://quarkly.space/">{text('Value', 'Quarkly', 'Data')}</Link>
  </Theme>
));

stories.add('with text', () => (
  <Theme>
    <Link href="https://quarkly.space/" color="#007bff">
      <Text variant="h1" color="#007bff" hoverColor="#0056b3">
        {text('Value', 'Quarkly', 'Data')}
      </Text>
    </Link>
  </Theme>
));

stories.add('with props', () => (
  <Theme>
    <Link
      href={text('href', 'https://quarkly.space/', 'Core')}
      name={text('name', '', 'Core')}
      target={select(
        'target',
        {
          _blank: '_blank',
          _self: '_self',
          _parent: '_parent',
          _top: '_top',
        },
        '_self',
        'Core',
      )}
      title={text('title', '', 'Core')}
      variant={select(
        'variant',
        {
          underlined: 'underlined',
          hoverUnderlined: 'hoverUnderlined',
          nonUnderlined: 'nonUnderlined',
        },
        'underlined',
        'Core',
      )}
      color={color('color', '#007bff', 'Core')}
      bg={color('bg', '', 'Core')}
      p={text('p', '', 'Core')}
      paddingTop={text('paddingTop', '', 'Core')}
      paddingRight={text('paddingRight', '', 'Core')}
      paddingBottom={text('paddingBottom', '', 'Core')}
      paddingLeft={text('paddingLeft', '', 'Core')}
      px={text('px', '', 'Core')}
      py={text('py', '', 'Core')}
      m={text('m', '', 'Core')}
      marginTop={text('marginTop', '', 'Core')}
      marginRight={text('marginRight', '', 'Core')}
      marginBottom={text('marginBottom', '', 'Core')}
      marginLeft={text('marginLeft', '', 'Core')}
      mx={text('mx', '', 'Core')}
      my={text('my', '', 'Core')}
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
      zIndex={text('zIndex', '', 'Position')}
      top={text('top', '', 'Position')}
      right={text('right', '', 'Position')}
      bottom={text('bottom', '', 'Position')}
      left={text('left', '', 'Position')}>
      {text('Value', 'Some text...', 'Data')}
    </Link>
  </Theme>
));
