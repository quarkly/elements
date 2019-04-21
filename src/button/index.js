import React from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant, withEffect } from '../styled';
import { asQuark } from '../quark';

const BaseButton = styled('div')(
  {
    appearance: 'button',
    cursor: 'pointer',
    overflow: 'visible',
    outline: '0',
    verticalAlign: 'middle',
    userSelect: 'none',
    textRendering: 'auto',
    boxSizing: 'border-box',
  },
  themed('Button'),
  variant('buttons'),
  ...includeWith('defaults'),
  ...includeWith('button'),
  withEffect(':hover', 'hover', () => true),
  withEffect('.active', 'active', props => props.className && props.className.includes('active')),
);

const qStateDefault = {
  btnClick: () => {},
};
const Button = React.forwardRef((props, ref) => {
  const qState = props.qState || qStateDefault;
  return (
    <BaseButton as="button" onClick={qState.btnClick.bind(null, props)} {...props} ref={ref} />
  );
});

export default asQuark(Button);
