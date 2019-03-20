import * as styledPacks from '../styled/defaults';

export const styledProps = {
  // margin
  m: {
    description: 'margin - внешний отступ',
    alias: 'space',
  },
  mt: {
    description: 'margin-top - внешний отступ сверху',
    alias: 'space',
  },
  mr: {
    description: 'margin-right - внешний отступ справа',
    alias: 'space',
  },
  mb: {
    description: 'margin-bottom - внешний отступ снизу',
    alias: 'space',
  },
  ml: {
    description: 'margin-left - внешний отступ слева',
    alias: 'space',
  },
  mx: {
    description: 'margin x-axis - внешние отступы по горизонтали',
    alias: 'space',
  },
  my: {
    description: 'margin y-axis - внешние отступы по вертикали',
    alias: 'space',
  },
  // padding
  p: {
    description: 'padding - внутренний отступ',
    alias: 'space',
  },
  pt: {
    description: 'padding-top - внутренний отступ сверху',
    alias: 'space',
  },
  pr: {
    description: 'padding-right - внутренний отступ справа',
    alias: 'space',
  },
  pb: {
    description: 'padding-bottom - внутренний отступ снизу',
    alias: 'space',
  },
  pl: {
    description: 'padding-left - внутренний отступ слева',
    alias: 'space',
  },
  px: {
    description: 'padding x-axis - внутренние отступы по горизонтали',
    alias: 'space',
  },
  py: {
    description: 'padding y-axis - внутренние отступы по вертикали',
    alias: 'space',
  },
  width: {
    description: 'width - ширина элемента',
  },
  fontSize: {
    description: 'font-size - размер шрифта элемента',
  },
  textColor: {
    description: 'color - цвет текста',
  },
  bgColor: {
    description: 'background-color - цвет фона',
  },
  color: { description: 'color - цвет текста' },
  fontFamily: { description: 'font-family - семейство шрифта' },
  textAlign: { description: 'text-align - выравнивание текста по горизонтали' },
  lineHeight: { description: 'line-height - межстрочный интервал текста' },
  fontWeight: { description: 'font-weight - насыщенность шрифта' },
  fontStyle: { description: 'font-style - начертание шрифта' },
  letterSpacing: { description: 'letter-spacing - межбуквенный интервал шрифта' },
  display: { description: 'display - вариант отображения элемента' },
  maxWidth: { description: 'max-width - максимальная ширина элемента' },
  minWidth: { description: 'min-width - минимальная ширина элемента' },
  height: { description: 'height - высота элемента' },
  maxHeight: { description: 'max-height - максимальная высота элемента' },
  minHeight: { description: 'min-height - минимальная высота элемента' },
  sizeWidth: { description: 'TODO' },
  sizeHeight: { description: 'TODO' },
  size: { description: 'TODO' },
  ratioPadding: { description: 'TODO' },
  ratio: { description: 'TODO' },
  verticalAlign: { description: 'vertical-align - выравнивание элемента по вертикали' },
  alignItems: { description: 'align-items - выравнивание флекс-элементов внутри контейнера в перпендикулярном направлении' },
  alignContent: { description: 'align-content - выравнивание строк внутри флекс-контейнера по поперечной оси при наличии свободного пространства' },
  justifyItems: { description: 'justify-items - ' },
  justifyContent: { description: 'justify-content - распределение пространства вокруг флекс-элементов вдоль главной оси контейнера' },
  flexWrap: { description: 'flex-wrap - расположение флекс-элементов в одну или несколько строк' },
  flexBasis: { description: 'flex-basis - начальный размер флекс-элемента' },
  flexDirection: { description: 'flex-direction - направление основных осей во флекс-контейнере' },
  flex: { description: 'flex - сокращенное свойство объединяющее flex-grow, flex-shrink и flex-basis' },
  justifySelf: { description: 'justify-self - выравнивание элемента внутри ячейки по оси строки grid-контенера' },
  alignSelf: { description: 'align-self - выравнивание элемента внутри ячейки по оси столбца grid-контейнера' },
  order: { description: 'order - устанавливает порядок следования флекс-элемента в контейнере' },
  gridGap: { description: 'grid-gap - общее расстояние  между строками и столбцами в grid-контейнере' },
  gridColumnGap: { description: 'grid-column-gap - расстояние между столбцами в grid-контейнере' },
  gridRowGap: { description: 'grid-row-gap - общее расстояние между строками в grid-контейнере' },
  gridColumn: { description: 'grid-column - определяет с какого столбца будет начинаться элемент, сколько столбцов будет занимать элемент, или на каком столбце завершится элемент' },
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
