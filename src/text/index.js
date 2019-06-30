import React from 'react';
import elementary from '@quarkly/elementary';
import { getOmitProps, normalizeProps } from '../utils';

const ElText = elementary.div(
  {
    name: 'Text',
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
      'fontSize',
      'color',
      'fontFamily',
      'fontWeight',
      'textAlign',
      'lineHeight',
      'letterSpacing',
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
    variant: 'texts',
    effects: {
      hover: ':hover',
    },
    omit: getOmitProps(),
  },
  {
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
);

const Text = React.forwardRef((props, ref) => {
  return <ElText ref={ref} {...normalizeProps(props)} />;
});

export default { ...Text, propTypes: ElText.propTypes };
