import React from 'react';
import ReactDOM from 'react-dom';
import * as elements from '../index';

const { Theme, Provider } = elements;

Object.assign(window, { React, ...elements });

const { qConf, qApp } = window;

ReactDOM.hydrate(
  <Provider value={qConf}>
    <Theme name="quarkly">{qApp({})}</Theme>
  </Provider>,
  document.getElementById('root'),
);
