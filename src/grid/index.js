import elementary from '@quarkly/elementary';
import { getOmitProps } from '../utils';

const Grid = elementary.div(
  {
    name: 'Grid',
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
      'gridGap',
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
    variant: 'grids',
    effects: {
      hover: ':hover',
    },
    omit: getOmitProps(),
    normalize: true,
    mixins: true,
    aliases: true,
  },
  {
    display: 'grid',
  },
);

export default Grid;
