import React from 'react';
import ReactDOM from 'react-dom';
import * as elements from '../index';

const listElements = Object.values(elements);

const { Theme, Provider } = elements;
const { qConf, qApp } = window;

ReactDOM.hydrate(
  <Provider value={qConf}>
    <Theme name="quarkly">{qApp.apply(null, [React, ...listElements, qConf])}</Theme>
  </Provider>,
  document.getElementById('root'),
);
