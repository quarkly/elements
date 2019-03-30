import React from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';
import { asQuark } from '../quark';

const hovered = includeWith('hovered');
const withEffects = props => {
  return {
    '&:hover': hovered.reduce((acc, ef) => {
      Object.assign(acc, ef.call(null, props));
      return acc;
    }, {}),
    '&.active': hovered.reduce((acc, ef) => {
      Object.assign(acc, ef.call(null, props));
      return acc;
    }, {}),
  };
};

const BaseButton = styled('div')(
  {
    appearance: 'button',
    cursor: 'pointer',
    overflow: 'visible',
    outline: '0',
    verticalAlign: 'middle',
    userSelect: 'none',
    textRendering: 'auto',
  },
  themed('Button'),
  variant('buttons'),
  ...includeWith('defaults'),
  ...includeWith('button'),
  withEffects,
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
