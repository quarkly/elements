/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Tabs from './index';
import Theme from '../theme';
import Text from '../text';
import Box from '../box';
import Button from '../button';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Tabs width="100px" bg="blue">
      <Box role="tabnav">
        <Button hoverBg={["red", "green"]} hoverColor="blue" className="ss">
          111
        </Button>
        <Button>222</Button>
        <Button>333</Button>
        <Button>444</Button>
      </Box>
      <Text role="tabs">
        <Text>tab1</Text>
        <Text>tab13</Text>
        <Text>tab14</Text>
        <Text>tab15</Text>
      </Text>
    </Tabs>
  </Theme>
));
