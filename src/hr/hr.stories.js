import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, select, number } from '@storybook/addon-knobs';
import Hr from './index';
import Theme from '../theme';

const stories = storiesOf('Hr', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Theme>
      Content
      <Hr />
      Content
    </Theme>
  ))
  .add('variants', () => (
    <Theme>
      Big
      <Hr variant="wide" />
      Small
      <Hr variant="narrow" />
      Content
    </Theme>
  ))
  .add('with props', () => (
    <Theme>
      Content
      <Hr
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
        width={text('width', '100px')}
        height={text('height', '1px')}
        bg={color('color', 'lightslategrey')}
        display={select(
          'display',
          {
            block: 'block',
            none: 'none',
          },
          'block',
        )}
        opacity={number('opacity', '', '{1}', 'Misc')}
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
      Content
    </Theme>
  ));
