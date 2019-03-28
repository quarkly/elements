import * as styledPacks from '../styled/defaults';

export const styledProps = {
  // margin
  m: {
    description: 'margin - внешний отступ',
    category: 'Отступы',
    alias: 'space',
  },
  mt: {
    description: 'margin-top - внешний отступ сверху',
    category: 'Отступы',
    alias: 'space',
  },
  mr: {
    description: 'margin-right - внешний отступ справа',
    category: 'Отступы',
    alias: 'space',
  },
  mb: {
    description: 'margin-bottom - внешний отступ снизу',
    category: 'Отступы',
    alias: 'space',
  },
  ml: {
    description: 'margin-left - внешний отступ слева',
    category: 'Отступы',
    alias: 'space',
  },
  mx: {
    description: 'margin x-axis - внешние отступы по горизонтали',
    category: 'Отступы',
    alias: 'space',
  },
  my: {
    description: 'margin y-axis - внешние отступы по вертикали',
    category: 'Отступы',
    alias: 'space',
  },
  // padding
  p: {
    description: 'padding - внутренний отступ',
    category: 'Отступы',
    alias: 'space',
  },
  pt: {
    description: 'padding-top - внутренний отступ сверху',
    category: 'Отступы',
    alias: 'space',
  },
  pr: {
    description: 'padding-right - внутренний отступ справа',
    category: 'Отступы',
    alias: 'space',
  },
  pb: {
    description: 'padding-bottom - внутренний отступ снизу',
    category: 'Отступы',
    alias: 'space',
  },
  pl: {
    description: 'padding-left - внутренний отступ слева',
    category: 'Отступы',
    alias: 'space',
  },
  px: {
    description: 'padding x-axis - внутренние отступы по горизонтали',
    category: 'Отступы',
    alias: 'space',
  },
  py: {
    description: 'padding y-axis - внутренние отступы по вертикали',
    category: 'Отступы',
    alias: 'space',
  },
  width: {
    description: 'width - ширина элемента',
    category: 'Лэйаут',
  },
  fontSize: {
    description: 'font-size - размер шрифта элемента',
    category: 'Типографика',
  },
  textColor: {
    description: 'color - цвет текста',
    category: 'Типографика',
  },
  bgColor: {
    description: 'background-color - цвет фона',
    category: 'Фон',
  },
  color: {
    description: 'color - цвет текста',
    category: 'Типографика',
  },
  fontFamily: {
    description: 'font-family - семейство шрифта',
    category: 'Типографика',
  },
  textAlign: {
    description: 'text-align - выравнивание текста по горизонтали',
    category: 'Типографика',
  },
  lineHeight: {
    description: 'line-height - межстрочный интервал текста',
    category: 'Типографика',
  },
  fontWeight: {
    description: 'font-weight - насыщенность шрифта',
    category: 'Типографика',
  },
  fontStyle: {
    description: 'font-style - начертание шрифта',
    category: 'Типографика',
  },
  letterSpacing: {
    description: 'letter-spacing - межбуквенный интервал шрифта',
    category: 'Типографика',
  },
  display: {
    description: 'display - вариант отображения элемента',
    category: 'Лэйаут',
  },
  maxWidth: {
    description: 'max-width - максимальная ширина элемента',
    category: 'Лэйаут',
  },
  minWidth: {
    description: 'min-width - минимальная ширина элемента',
    category: 'Лэйаут',
  },
  height: {
    description: 'height - высота элемента',
    category: 'Лэйаут',
  },
  maxHeight: {
    description: 'max-height - максимальная высота элемента',
    category: 'Лэйаут',
  },
  minHeight: {
    description: 'min-height - минимальная высота элемента',
    category: 'Лэйаут',
  },
  sizeWidth: { description: 'TODO' },
  sizeHeight: { description: 'TODO' },
  size: {
    description: 'size - одно значение для width и height',
    category: 'Лэйаут',
  },
  ratioPadding: { description: 'TODO' },
  ratio: {
    description: 'ratio - задает пропорции элементу (height:0 и padding-bottom)',
    category: 'Лэйаут',
  },
  verticalAlign: {
    description: 'vertical-align - выравнивание элемента по вертикали',
    category: 'Лэйаут',
  },
  alignItems: {
    description:
      'align-items - выравнивание элементов внутри flex-контейнера в перпендикулярном направлении',
    category: 'Flex',
  },
  alignContent: {
    description:
      'align-content - выравнивание строк внутри flex-контейнера по поперечной оси при наличии свободного пространства',
    category: 'Flex',
  },
  justifyItems: {
    description:
      'justify-items - определяет свойство justify-self для всех дочерних элементов flex-контейнера',
    category: 'Flex',
  },
  justifyContent: {
    description:
      'justify-content - распределение пространства вокруг элементов вдоль главной оси flex-контейнера',
    category: 'Flex',
  },
  flexWrap: {
    description: 'flex-wrap - расположение flex-элементов в одну или несколько строк',
    category: 'Flex',
  },
  flexBasis: {
    description: 'flex-basis - начальный размер flex-элемента',
    category: 'Flex',
  },
  flexDirection: {
    description: 'flex-direction - направление основных осей в flex-контейнере',
    category: 'Flex',
  },
  flex: {
    description: 'flex - сокращенное свойство объединяющее flex-grow, flex-shrink и flex-basis',
    category: 'Flex',
  },
  justifySelf: {
    description: 'justify-self - выравнивание элемента внутри ячейки по оси строки grid-контенера',
    category: 'Grid',
  },
  alignSelf: {
    description: 'align-self - выравнивание элемента внутри ячейки по оси столбца grid-контейнера',
    category: 'Grid',
  },
  order: {
    description: 'order - устанавливает порядок следования элемента в flex-контейнере',
    category: 'Flex',
  },
  gridGap: {
    description: 'grid-gap - общее расстояние  между строками и столбцами в grid-контейнере',
    category: 'Grid',
  },
  gridColumnGap: {
    description: 'grid-column-gap - расстояние между столбцами в grid-контейнере',
    category: 'Grid',
  },
  gridRowGap: {
    description: 'grid-row-gap - общее расстояние между строками в grid-контейнере',
    category: 'Grid',
  },
  gridColumn: {
    description:
      'grid-column - определяет с какого столбца будет начинаться элемент, сколько столбцов будет занимать элемент, или на каком столбце завершится элемент в grid-контейнере',
    category: 'Grid',
  },
  gridRow: {
    description:
      'grid-row - определяет с какой строки будет начинаться элемент, сколько строк будет занимать элемент, или на какой строке завершится элемент в grid-контейнере',
    category: 'Grid',
  },
  gridAutoFlow: {
    description:
      'grid-auto-flow — определяет, как работает алгоритм автоматического размещения для неявно созданных элементов, указывая как они будут размещены в grid-контейнере',
    category: 'Grid',
  },
  gridAutoColumns: {
    description:
      'grid-auto-columns - задает размер неявно созданных столбцов в grid-контейнере. Влияет только на те столбцы, размер которых явно не задан',
    category: 'Grid',
  },
  gridAutoRows: {
    description:
      'grid-auto-rows - задает размер неявно созданных строк в grid-контейнере. Влияет только на те строки, размер которых явно не задан',
    category: 'Grid',
  },
  gridTemplateColumns: {
    description:
      'grid-template-columns - определяет количество, наименование и размер столбцов в grid-контейнере',
    category: 'Grid',
  },
  gridTemplateRows: {
    description:
      'grid-template-rows - определяет количество, наименование и размер строк в grid-контейнере',
    category: 'Grid',
  },
  gridTemplateAreas: {
    description:
      'grid-template-areas - определяет шаблон макета сетки, ссылаясь при этом на имена областей элементов, которые задаются с помощью свойства grid-area',
    category: 'Grid',
  },
  gridArea: {
    description:
      'grid-area - задает элементу имя, на которое можно сослаться при определении шаблона сетки, созданного с помощью свойства grid-template-areas.',
    category: 'Grid',
  },
  // borders
  border: {
    description: 'border - границы элемента',
    category: 'Разное',
  },
  borderTop: {
    description: 'border-top - верхняя граница элемента',
    category: 'Разное',
  },
  borderRight: {
    description: 'border-right - правая граница элемента',
    category: 'Разное',
  },
  borderBottom: {
    description: 'border-bottom - нижняя граница элемента',
    category: 'Разное',
  },
  borderLeft: {
    description: 'border-left - левая граница элемента',
    category: 'Разное',
  },
  borders: {
    description:
      'Объединяет в себя свойства border, border-top, border-right, border-bottom, border-left, border-color, border-width, border-style, border-radius',
    category: 'Разное',
  },
  borderColor: {
    description: 'border-color - цвет границы элемента',
    category: 'Разное',
  },
  borderRadius: {
    description: 'border-radius - скругление границ элемента',
    category: 'Разное',
  },
  boxShadow: {
    description: 'box-shadow - добавляет одну или несколько теней к элементу',
    category: 'Разное',
  },
  opacity: {
    description: 'opacity - определяет уровень прозрачности для элемента',
    category: 'Разное',
  },
  overflow: {
    description:
      'overflow - указывает, что произойдёт, если содержимое переполняет размеры элемента',
    category: 'Разное',
  },
  background: {
    description: 'background - определяет необходимые свойства фона в одном объявлении',
    category: 'Фон',
  },
  backgroundImage: {
    description: 'background-image - задает одно или несколько фоновых изображений для элемента',
    category: 'Фон',
  },
  backgroundPosition: {
    description: 'background-position - позиционирует фоновое изображение',
    category: 'Фон',
  },
  backgroundRepeat: {
    description: 'background-repeat - устанавливает, как будет повторяться фоновое изображение',
    category: 'Фон',
  },
  backgroundSize: {
    description: 'background-size - определяет размер фонового изображения',
    category: 'Фон',
  },
  position: {
    description: 'position - указывает какой тип позиционирования используется для элемента',
    category: 'Позиция',
  },
  zIndex: {
    description: 'z-index - определяет порядок расположения позиционированных элементов по оси Z',
    category: 'Позиция',
  },
  top: {
    description:
      'top - указывает направление смещения позиционированного элемента от верхнего края',
    category: 'Позиция',
  },
  right: {
    description:
      'right - указывает направление смещения позиционированного элемента от правого края',
    category: 'Позиция',
  },
  bottom: {
    description:
      'bottom - указывает направление смещения позиционированного элемента от нижнего края',
    category: 'Позиция',
  },
  left: {
    description: 'left - указывает направление смещения позиционированного элемента от левого края',
    category: 'Позиция',
  },
  textStyle: {
    description: 'Варианты стилей текста',
    category: 'Основное',
  },
  colorStyle: {
    description: 'Варианты цветовых стилей',
    category: 'Основное',
  },
  buttonStyle: {
    description: 'Варианты стилей кнопок',
    category: 'Основное',
  },
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
