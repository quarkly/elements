import * as styledSystem from 'styled-system';
import classNames from 'classnames';
import * as settings from './defaults';

export const styled = styledSystem;

export const themed = key => props => props.theme[key];

export const variant = key => styled.variant({ key });

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
styled.arrowColor = styled.style({
  prop: 'arrowColor',
  cssProperty: 'borderColor',
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
