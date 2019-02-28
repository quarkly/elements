import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Theme } from '../index';

const Hello = () => (
  <Theme>
    <Card>Hello</Card>
  </Theme>
);
ReactDOM.render(<Hello />, document.getElementById('root'));
