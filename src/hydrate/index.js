import React from 'react';
import ReactDOM from 'react-dom';
import * as elements from '../index';

Object.assign(window, { React, ...elements });
const app = window.qApp;
ReactDOM.hydrate(app(), document.getElementById('root'));
