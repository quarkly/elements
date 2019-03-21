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
  size: { description: 'size - одно значение для width и height' },
  ratioPadding: { description: 'TODO' },
  ratio: { description: 'ratio - задает пропорции элементу (height:0 и padding-bottom)' },
  verticalAlign: { description: 'vertical-align - выравнивание элемента по вертикали' },
  alignItems: { description: 'align-items - выравнивание элементов внутри flex-контейнера в перпендикулярном направлении' },
  alignContent: { description: 'align-content - выравнивание строк внутри flex-контейнера по поперечной оси при наличии свободного пространства' },
  justifyItems: { description: 'justify-items - определяет свойство justify-self для всех дочерних элементов flex-контейнера' },
  justifyContent: { description: 'justify-content - распределение пространства вокруг элементов вдоль главной оси flex-контейнера' },
  flexWrap: { description: 'flex-wrap - расположение flex-элементов в одну или несколько строк' },
  flexBasis: { description: 'flex-basis - начальный размер flex-элемента' },
  flexDirection: { description: 'flex-direction - направление основных осей в flex-контейнере' },
  flex: { description: 'flex - сокращенное свойство объединяющее flex-grow, flex-shrink и flex-basis' },
  justifySelf: { description: 'justify-self - выравнивание элемента внутри ячейки по оси строки grid-контенера' },
  alignSelf: { description: 'align-self - выравнивание элемента внутри ячейки по оси столбца grid-контейнера' },
  order: { description: 'order - устанавливает порядок следования элемента в flex-контейнере' },
  gridGap: { description: 'grid-gap - общее расстояние  между строками и столбцами в grid-контейнере' },
  gridColumnGap: { description: 'grid-column-gap - расстояние между столбцами в grid-контейнере' },
  gridRowGap: { description: 'grid-row-gap - общее расстояние между строками в grid-контейнере' },
  gridColumn: { description: 'grid-column - определяет с какого столбца будет начинаться элемент, сколько столбцов будет занимать элемент, или на каком столбце завершится элемент в grid-контейнере' },
  gridRow: { description: 'grid-row - определяет с какой строки будет начинаться элемент, сколько строк будет занимать элемент, или на какой строке завершится элемент в grid-контейнере' },
  gridAutoFlow: { description: 'grid-auto-flow — определяет, как работает алгоритм автоматического размещения для неявно созданных элементов, указывая как они будут размещены в grid-контейнере' },
  gridAutoColumns: { description: 'grid-auto-columns - задает размер неявно созданных столбцов в grid-контейнере. Влияет только на те столбцы, размер которых явно не задан' },
  gridAutoRows: { description: 'grid-auto-rows - задает размер неявно созданных строк в grid-контейнере. Влияет только на те строки, размер которых явно не задан' },
  gridTemplateColumns: { description: 'grid-template-columns - определяет количество, наименование и размер столбцов в grid-контейнере' },
  gridTemplateRows: { description: 'grid-template-rows - определяет количество, наименование и размер строк в grid-контейнере' },
  gridTemplateAreas: { description: 'grid-template-areas - определяет шаблон макета сетки, ссылаясь при этом на имена областей элементов, которые задаются с помощью свойства grid-area' },
  gridArea: { description: 'grid-area - задает элементу имя, на которое можно сослаться при определении шаблона сетки, созданного с помощью свойства grid-template-areas.' },
  // borders
  border: { description: 'border - границы элемента' },
  borderTop: { description: 'border-top - верхняя граница элемента' },
  borderRight: { description: 'border-right - правая граница элемента' },
  borderBottom: { description: 'border-bottom - нижняя граница элемента' },
  borderLeft: { description: 'border-left - левая граница элемента' },
  borders: { description: 'Объединяет в себя свойства border, border-top, border-right, border-bottom, border-left, border-color, border-width, border-style, border-radius' },
  borderColor: { description: 'border-color - цвет границы элемента' },
  borderRadius: { description: 'border-radius - скругление границ элемента' },
  boxShadow: { description: 'box-shadow - добавляет одну или несколько теней к элементу' },
  opacity: { description: 'opacity - определяет уровень прозрачности для элемента' },
  overflow: { description: 'overflow - указывает, что произойдёт, если содержимое переполняет размеры элемента' },
  background: { description: 'background - определяет необходимые свойства фона в одном объявлении' },
  backgroundImage: { description: 'background-image - задает одно или несколько фоновых изображений для элемента' },
  backgroundPosition: { description: 'background-position - позиционирует фоновое изображение' },
  backgroundRepeat: { description: 'background-repeat - устанавливает, как будет повторяться фоновое изображение' },
  backgroundSize: { description: 'background-size - определяет размер фонового изображения' },
  position: { description: 'position - указывает какой тип позиционирования используется для элемента' },
  zIndex: { description: 'z-index - определяет порядок расположения позиционированных элементов по оси Z' },
  top: { description: 'top - указывает направление смещения позиционированного элемента от верхнего края' },
  right: { description: 'right - указывает направление смещения позиционированного элемента от правого края' },
  bottom: { description: 'bottom - указывает направление смещения позиционированного элемента от нижнего края' },
  left: { description: 'left - указывает направление смещения позиционированного элемента от левого края' },
  textStyle: { description: 'Варианты стилей текста' },
  colorStyle: { description: 'Варианты цветовых стилей' },
  buttonStyle: { description: 'Варианты стилей кнопок' },
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
