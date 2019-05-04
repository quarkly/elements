import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Block from '../block';
import Select from './index';
import Option from '../option';
import Theme from '../theme';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add('basic', () => (
  <Theme>
    <Block bg="#252526" display="flex" alignItems="center" justifyContent="center">
      <Select>
        <Option value="hello">hello</Option>
        <Option value="world">world</Option>
      </Select>
    </Block>
  </Theme>
));
stories.add('black', () => (
  <Theme>
    <Select bg="black">
      <Option value="hello">hello</Option>
      <Option value="world">world</Option>
    </Select>
  </Theme>
));
