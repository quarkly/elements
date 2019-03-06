import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from '../button';
import Theme from './index';
import { Provider } from '../quark';

const stories = storiesOf('Theme', module);

stories.addDecorator(withKnobs);

const theme = {
  Button: {
    backgroundColor: 'red',
  },
};

const qState = {
  themes: {
    quarkly: theme,
  },
  btnClick: () => {},
};

stories.add('with di', () => (
  <Provider value={qState}>
    <Theme name="quarkly">
      <Button>default</Button>
      <Button variant="primary">primary</Button>
    </Theme>
  </Provider>
));
