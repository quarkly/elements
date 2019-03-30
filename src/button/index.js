import React from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant, withEffect } from '../styled';
import { asQuark } from '../quark';

const hovered = includeWith('hovered');
const withEffects = props => {
  return {
    '&:hover': {
      '@media screen and (min-width: 40em)': {
        backgroundColor: 'red'
      }
    },
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
  // ...props => withEffect(':hover', 'hover', () => true)(props),
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
