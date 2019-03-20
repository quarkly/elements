import * as styledPacks from '../styled/defaults';

export const styledProps = {
  // margin
  m: {
    description: 'margin - внешний отступ',
    alias: 'space',
  },
  mt: {
    description: 'margin-top - ',
    alias: 'space',
  },
  mr: {
    description: 'margin-right - ',
    alias: 'space',
  },
  mb: {
    description: 'margin-bottom - ',
    alias: 'space',
  },
  ml: {
    description: 'margin-left - ',
    alias: 'space',
  },
  mx: {
    description: 'margin x-axis - ',
    alias: 'space',
  },
  my: {
    description: 'margin y-axis - ',
    alias: 'space',
  },
  // padding
  p: {
    description: 'padding - ',
    alias: 'space',
  },
  pt: {
    description: 'padding-top - ',
    alias: 'space',
  },
  pr: {
    description: 'padding-right - ',
    alias: 'space',
  },
  pb: {
    description: 'padding-bottom - ',
    alias: 'space',
  },
  pl: {
    description: 'padding-left - ',
    alias: 'space',
  },
  px: {
    description: 'padding x-axis - ',
    alias: 'space',
  },
  py: {
    description: 'padding y-axis - ',
    alias: 'space',
  },
  width: {
    description: 'width - ширина элемента.',
  },
  fontSize: {
    description: 'font-size - размер шрифта элемента.',
  },
  textColor: {
    description: 'color - цвет текста',
  },
  bgColor: {
    description: 'TODO',
  },
  color: { description: 'TODO' },
  fontFamily: { description: 'TODO' },
  textAlign: { description: 'TODO' },
  lineHeight: { description: 'TODO' },
  fontWeight: { description: 'TODO' },
  fontStyle: { description: 'TODO' },
  letterSpacing: { description: 'TODO' },
  display: { description: 'TODO' },
  maxWidth: { description: 'TODO' },
  minWidth: { description: 'TODO' },
  height: { description: 'TODO' },
  maxHeight: { description: 'TODO' },
  minHeight: { description: 'TODO' },
  sizeWidth: { description: 'TODO' },
  sizeHeight: { description: 'TODO' },
  size: { description: 'TODO' },
  ratioPadding: { description: 'TODO' },
  ratio: { description: 'TODO' },
  verticalAlign: { description: 'TODO' },
  alignItems: { description: 'TODO' },
  alignContent: { description: 'TODO' },
  justifyItems: { description: 'TODO' },
  justifyContent: { description: 'TODO' },
  flexWrap: { description: 'TODO' },
  flexBasis: { description: 'TODO' },
  flexDirection: { description: 'TODO' },
  flex: { description: 'TODO' },
  justifySelf: { description: 'TODO' },
  alignSelf: { description: 'TODO' },
  order: { description: 'TODO' },
  gridGap: { description: 'TODO' },
  gridColumnGap: { description: 'TODO' },
  gridRowGap: { description: 'TODO' },
  gridColumn: { description: 'TODO' },
  gridRow: { description: 'TODO' },
  gridAutoFlow: { description: 'TODO' },
  gridAutoColumns: { description: 'TODO' },
  gridAutoRows: { description: 'TODO' },
  gridTemplateColumns: { description: 'TODO' },
  gridTemplateRows: { description: 'TODO' },
  gridTemplateAreas: { description: 'TODO' },
  gridArea: { description: 'TODO' },
  // borders
  border: { description: 'TODO' },
  borderTop: { description: 'TODO' },
  borderRight: { description: 'TODO' },
  borderBottom: { description: 'TODO' },
  borderLeft: { description: 'TODO' },
  borders: { description: 'TODO' },
  borderColor: { description: 'TODO' },
  borderRadius: { description: 'TODO' },
  boxShadow: { description: 'TODO' },
  opacity: { description: 'TODO' },
  overflow: { description: 'TODO' },
  background: { description: 'TODO' },
  backgroundImage: { description: 'TODO' },
  backgroundPosition: { description: 'TODO' },
  backgroundRepeat: { description: 'TODO' },
  backgroundSize: { description: 'TODO' },
  position: { description: 'TODO' },
  zIndex: { description: 'TODO' },
  top: { description: 'TODO' },
  right: { description: 'TODO' },
  bottom: { description: 'TODO' },
  left: { description: 'TODO' },
  textStyle: { description: 'TODO' },
  colorStyle: { description: 'TODO' },
  buttonStyle: { description: 'TODO' },
};

const findAsAlias = key => {
  return Object.keys(styledProps).reduce((acc, prop) => {
    if (styledProps[prop].alias === key) {
      acc[prop] = styledProps[prop];
    }
    return acc;
  }, {});
};

const findProp = key => {
  if (styledProps[key]) {
    return { [key]: styledProps[key] };
  }
  return findAsAlias(key);
};
export const styledPackToDict = () => {
  const packs = Object.keys(styledPacks);
  return packs.reduce((acc, pack) => {
    acc[pack] = styledPacks[pack].reduce((accum, key) => {
      Object.assign(accum, findProp(key));
      return accum;
    }, {});
    return acc;
  }, {});
};
