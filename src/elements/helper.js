import * as styled from 'styled-system';

export const themed = key => theme => theme[key];

export const variant = key => styled.variant({ key });

export const defaults = [
  'height',
  'bgColor',
  'color',
  'space',
  'width',
  'fontSize',
  'color',
  'flex',
  'order',
  'alignSelf',
];

export const withDefault = props => {
  return defaults.reduce((acc, attr) => {
    if (!styled[attr]) {
      return acc;
    }
    Object.assign(acc, styled[attr](props));
    return acc;
  }, {});
};

const allStyles = [
  'space',
  'width',
  'fontSize',
  'textColor',
  'bgColor',
  'color',
  'fontFamily',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'fontStyle',
  'letterSpacing',
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'sizeWidth',
  'sizeHeight',
  'size',
  'ratioPadding',
  'ratio',
  'verticalAlign',
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexBasis',
  'flexDirection',
  'flex',
  'justifySelf',
  'alignSelf',
  'order',
  'gridGap',
  'gridColumnGap',
  'gridRowGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoColumns',
  'gridAutoRows',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridArea',
  // borders
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borders',
  'borderColor',
  'borderRadius',
  'boxShadow',
  'opacity',
  'overflow',
  'background',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'textStyle',
  'colorStyle',
  'buttonStyle',
];
