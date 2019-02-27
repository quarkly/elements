import * as styledSystem from 'styled-system';
import classNames from 'classnames';
import { defaults, card, image, hovered, flex } from './defaults';

const styled = styledSystem;

export const themed = key => props => props.theme[key];

export const variant = key => styled.variant({ key });

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

export const includeWith = key => {
  const values = settings[key];
  return values.reduce((acc, attr) => {
    if (!styled[attr]) {
      return acc;
    }
    acc.push(styled[attr]);
    return acc;
  }, []);
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
