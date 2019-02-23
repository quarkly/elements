import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from '../card';
import Theme from '../theme';
import Image from '../image';
import Text from '../text';
import Button from '../button';
import Flex from './index';

const stories = storiesOf('Flex', module);

stories.addDecorator(withKnobs);

stories
  .add('with card', () => (
    <Theme>
      <Card>
        <Image height="200px" src="https://picsum.photos/200"></Image>
        <Text p="10px">Some text</Text>
        <Flex alignItems="center" justifyContent="center"><Button m="10px">Click</Button><Button m="10px">Click</Button><Button m="10px">Click</Button></Flex>
      </Card>
    </Theme>
  ));
