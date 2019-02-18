import * as styled from 'styled-system';

export const themed = key => theme => theme[key];

export const variant = key => styled.variant({ key });

export const defaults = [
  'bgColor',
  'color',
  'space',
  'width',
  'fontSize',
  'color',
  'flex',
  'order',
  'alignSelf',
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'sizeWidth',
  'sizeHeight',
  'size',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
];

export const card = [
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borders',
  'borderColor',
  'borderRadius',
];

export const image = [
  'background',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
];

export const settings = {
  defaults,
  card,
  image,
};

export const includeWith = (key, props) => {
  const values = settings[key];
  return values.reduce((acc, attr) => {
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
