import React from 'react';
import Theme from '../theme';
import { Provider } from '../quark';
import themeC from './themeConstructor.json';

const qStateDefault = {
  themes: {
    constructor: themeC,
  },
  btnClick: () => {},
};

export default props => {
  const { children, ...prop } = props;
  return (
    <Provider value={qStateDefault}>
      <Theme {...prop}>{children}</Theme>
    </Provider>
  );
};
