import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Tabs from './index';
import Theme from '../theme';
import Text from '../text';
import Box from '../box';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Tabs width="100px" bg="blue">
      <Text role="tab">
        tab1
        <Text role="tabnav">nav1</Text>
      </Text>
      <Text role="tab">
        tab2
        <Text role="tabnav">nav2</Text>
      </Text>
      <Text role="tab">
        tab3
        <Text role="tabnav">nav3</Text>
      </Text>
      <Box role="tab" bg="green">
        <Text role="tabnav">Title</Text>
        <Text>Content</Text>
      </Box>
    </Tabs>
  </Theme>
));
