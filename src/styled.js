import * as styledSystem from 'styled-system';
import { merge } from 'lodash';
import classNames from 'classnames';

const styled = styledSystem;

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

export const hovered = ['bgHover', 'colorHover'];

export const flex = ['flexWrap', 'flexDirection', 'alignItems', 'justifyContent'];

export const settings = {
  defaults,
  card,
  image,
  hovered,
  flex,
};

styled.bgHover = styled.style({
  prop: 'bgHover',
  cssProperty: 'backgroundColor',
  key: 'colors',
});

styled.colorHover = styled.style({
  prop: 'colorHover',
  cssProperty: 'color',
  key: 'colors',
});

export const includeWith = (key, props) => {
  const values = settings[key];
  return values.reduce((acc, attr) => {
    if (!styled[attr]) {
      return acc;
    }
    merge(acc, styled[attr](props));
    return acc;
  }, {});
};
// класс для jss + класс из пропсов
export const className = (name, props) => classNames(props.classes[name], props.className);

// const allStyles = [
//   'space',
//   'width',
//   'fontSize',
//   'textColor',
//   'bgColor',
//   'color',
//   'fontFamily',
//   'textAlign',
//   'lineHeight',
//   'fontWeight',
//   'fontStyle',
//   'letterSpacing',
//   'display',
//   'maxWidth',
//   'minWidth',
//   'height',
//   'maxHeight',
//   'minHeight',
//   'sizeWidth',
//   'sizeHeight',
//   'size',
//   'ratioPadding',
//   'ratio',
//   'verticalAlign',
//   'alignItems',
//   'alignContent',
//   'justifyItems',
//   'justifyContent',
//   'flexWrap',
//   'flexBasis',
//   'flexDirection',
//   'flex',
//   'justifySelf',
//   'alignSelf',
//   'order',
//   'gridGap',
//   'gridColumnGap',
//   'gridRowGap',
//   'gridColumn',
//   'gridRow',
//   'gridAutoFlow',
//   'gridAutoColumns',
//   'gridAutoRows',
//   'gridTemplateColumns',
//   'gridTemplateRows',
//   'gridTemplateAreas',
//   'gridArea',
//   // borders
//   'border',
//   'borderTop',
//   'borderRight',
//   'borderBottom',
//   'borderLeft',
//   'borders',
//   'borderColor',
//   'borderRadius',
//   'boxShadow',
//   'opacity',
//   'overflow',
//   'background',
//   'backgroundImage',
//   'backgroundPosition',
//   'backgroundRepeat',
//   'backgroundSize',
//   'position',
//   'zIndex',
//   'top',
//   'right',
//   'bottom',
//   'left',
//   'textStyle',
//   'colorStyle',
//   'buttonStyle',
// ];
