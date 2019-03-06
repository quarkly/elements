import React from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';
import { asQuark } from '../quark';

const BaseButton = styled('div')(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  themed('Button'),
  variant('buttons'),
  ...includeWith('defaults'),
  ...includeWith('button'),
);

const qStateDefault = {
  btnClick: () => {},
};
const Button = props => {
  const qState = props.qState || qStateDefault;
  return <BaseButton as="button" {...props} onClick={qState.btnClick.bind(null, props)} />;
};

export default asQuark(Button);
