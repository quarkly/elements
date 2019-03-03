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
        opacity={number('opacity', ' ')}
        order={number('order', '', 'Flexbox')}
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
          'Layout',
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
          'Layout',
        )}
      />
      Content
    </Theme>
  ));
