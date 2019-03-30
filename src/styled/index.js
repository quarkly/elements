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

const firstUpper = string => string.charAt(0).toUpperCase() + string.slice(1);
const firstLower = string => string.charAt(0).toLowerCase() + string.slice(1);

console.log(styled);
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

const toEffectProp = (efName, styledName) => `${efName}${firstUpper(styledName)}`;
const toStyledProp = (efName, current) => firstLower(current.replace(efName, ''));

const aliasesModule = {
  bg: 'backgroundColor',
  m: 'space',
  ml: 'space',
  mt: 'space',
  mb: 'space',
  mx: 'space',
  my: 'space',
  mr: 'space',
  p: 'space',
  pl: 'space',
  pt: 'space',
  pb: 'space',
  px: 'space',
  py: 'space',
  pr: 'space',
};

const toModuleName = name => aliasesModule[name] || name;

const aliases = {
  bgColor: 'bg',
  space: {
    m: 'space',
    ml: 'space',
    mt: 'space',
    mb: 'space',
    mx: 'space',
    my: 'space',
    mr: 'space',
    p: 'space',
    pl: 'space',
    pt: 'space',
    pb: 'space',
    px: 'space',
    py: 'space',
    pr: 'space',
  },
};

// распарсить все пропсы, на
export const withEffect = (key, name, verify, pack = 'defaults') => {
  const $key = `&${key}`; // :hover :active .active .disabled etc..
  const effectMap = settings[pack].reduce((acc, styledName) => {
    if (aliases[styledName]) {
      if (aliases[styledName] instanceof Object) {
        const names = Object.keys(aliases[styledName]).reduce((a, n) => {
          a[toEffectProp(name, n)] = true;
          return a;
        }, {});
        Object.assign(acc, names);
      } else {
        acc[toEffectProp(name, aliases[styledName])] = true;
      }
    } else {
      acc[toEffectProp(name, styledName)] = true;
    }
    return acc;
  }, {});

  return props => {
    if (!verify(props)) {
      return [];
    }
    console.log(effectMap);
    const actualProps = Object.keys(props).filter(prop => effectMap[prop]);
    console.log(actualProps);
    if (!actualProps.length) {
      return [];
    }
    const styledProps = actualProps.map(prop => toStyledProp(name, prop));
    const styles = styledProps.reduce((acc, prop, i) => {
      acc.push({
        [$key]: styled[toModuleName(prop)].call(null, {
          [prop]: props[actualProps[i]],
          theme: props.theme,
        }),
      });
      return acc;
    }, []);
    console.log(styles);
    return styles;
  };
};

// класс для jss + класс из пропсов
export const className = (name, props) => classNames(props.classes[name], props.className);
