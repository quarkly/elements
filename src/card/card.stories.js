import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from './index';
import Theme from '../theme';
import Image from '../image';
import Text from '../text';
import Button from '../button';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);

stories
  .add('empty', () => (
    <Theme>
      <Card />
    </Theme>
  ))
  .add('with content', () => (
    <Theme>
      <Card>
        <Image height="200px" src="https://picsum.photos/200" />
        <Text p="10px">Some text</Text>
        <Button m="10px">Click</Button>
      </Card>
    </Theme>
  ));
