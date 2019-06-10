import React from 'react';
import elementary from '@quarkly/elementary';
import { asQuark } from '../quark';

const BaseButton = elementary.button(
  {
    name: 'Button',
    variant: 'buttons',
    effects: {
      hover: ':hover',
      active: '.active',
    },
    styles: [
      'border',
      'borderTop',
      'borderRight',
      'borderBottom',
      'borderLeft',
      'borders',
      'borderWidth',
      'borderColor',
      'borderRadius',
      'buttonStyle',
      'background',
      'backgroundImage',
      'backgroundPosition',
      'backgroundRepeat',
      'backgroundSize',
      'order',
      'alignSelf',
      'justifySelf',
      'opacity',
      'overflow',
    ],
  },
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
