import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Tooltip from './index';
import Theme from '../theme';
import Button from '../button';

const stories = storiesOf('Tooltip', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <div>
      <Tooltip color="red" title="hello from popover">
        <Button mx={'100px'}>Click me</Button>
      </Tooltip>
    </div>
  </Theme>
));
