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
      />
      Content
    </Theme>
  ));
