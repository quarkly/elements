import React from 'react';
import elementary from '@quarkly/elementary';
import { getOmitProps } from '../utils';

const ENAME = 'LIST';
const uid = name => `${ENAME}${name}`;

const List = elementary.ul({
  name: 'List',
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
    'gridGap',
    'gridColumnGap',
    'gridRowGap',
    'gridColumn',
    'gridAutoFlow',
    'gridAutoColumns',
    'gridAutoRows',
    'gridTemplateColumns',
    'gridTemplateRows',
    'gridTemplateAreas',
    'gridArea',
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
  variant: 'lists',
  effects: {
    hover: ':hover',
    focus: ':focus',
    active: ':active',
  },
  omit: getOmitProps(),
});

const Ul = ({ children, ...other }) => {
  return (
    <List {...other}>
      {React.Children.map(children, (child, i) => {
        return <li key={uid(i)}>{child}</li>;
      })}
    </List>
  );
};

Ul.propTypes = List.propTypes;

export default Ul;
