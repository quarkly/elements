import React from 'react';
import elementary from '@quarkly/elementary';
import { asQuark } from '../quark';
import { getOmitProps } from '../utils';

const qStateDefault = {
  btnClick: () => {},
};
const Button = React.forwardRef((props, ref) => {
  const qState = props.qState || qStateDefault;
  return <button onClick={qState.btnClick.bind(null, props)} {...props} ref={ref} />;
});

const BaseButton = elementary(Button)(
  {
    name: 'Button',
    variant: 'buttons',
    effects: {
      active: '.active',
      hover: ':hover',
    },
    omit: getOmitProps(),
    normalize: true,
    styles: [
      'variant',
      'display',
      'height',
      'minHeight',
      'maxHeight',
      'width',
      'minWidth',
      'maxWidth',
      'size',
      'fontSize',
      'color',
      'padding',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'paddingX',
      'paddingY',
      'margin',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'marginX',
      'marginY',
      'alignItems',
      'alignContent',
      'justifyItems',
      'justifyContent',
      'flexWrap',
      'flexBasis',
      'flexDirection',
      'flex',
      'order',
      'justifySelf',
      'alignSelf',
      'background',
      'backgroundColor',
      'backgroundImage',
      'backgroundSize',
      'backgroundPosition',
      'backgroundRepeat',
      'border',
      'borderTop',
      'borderRight',
      'borderBottom',
      'borderLeft',
      'borderColor',
      'borderRadius',
      'opacity',
      'boxShadow',
      'overflow',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'zIndex',
    ],
    mixins: true,
    aliases: true,
    propTypes: true,
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

export default { ...asQuark(BaseButton), propTypes: BaseButton.propTypes };
