# Элемент block
Используется как вспомогательный элемент

**styled-system Универсальные пропсы**
- children  
    - все что угодно
- p
- pt
- pr
- pb
- pl
- px
- py
- m
- mt
- mr
- mb
- ml
- mx
- my
- bg
- display
- width
   - minWidth
   - maxWidth
- height
   - minHeight
   - maxHeight
- size
- ratio
- flex
- justifyItems
- alignItems
- justifyContent
- alignContent
- flexWrap
- flexDirection
- order
- flexBasis
- background
- backgroundImage
- backgroundSize
- backgroundPosition
- backgroundRepeact
- border - Рамка у кнопки. Свитчер.
   - borderSize
   - borderTop
   - borderRight
   - borderBottom
   - borderLeft
   - borderSize - Размер рамки. Принимает цифру.
   - borderRadius - Радиус скругления углов. Принимает цифру.
   - borderColor - Цвет рамки. Принимает строку.
- opacity
- overflow
- position
   - top
   - right
   - bottom
   - left
- zIndex
- id

**styled-system Персональные пропсы**
- gradient - Градиент на фон. Свитчер
   - colorN - Цвет для градиента
- video - Видео в качестве фона. Свитчер
   - src - Источник видео на фон. Принимает строку
   - autoplayOff - Не запускать видео автоматически. Свитчер
   - loopOff - Не зацикливать видео. Свитчер
   - soundOff - Не включать звук у видео. Свитчер
- map - Карта на фон. Свитчер
   - mapAddress - Адрес точки на карте. Принимает строку
- heightByContent - Высота блока определяется его содержимым. Свитчер
- arrowDown - Кнопка-стрелка "вниз" в нижней части блока. Свитчер
   - color - цвет кнопки-стрелки. Принимает строку
   - size - размер кнопки-стрелки. Принимает цифру
- effectOnScroll - Эффекты с фоном при прокрутке блока. Принимает одно из значений: fixed, parallax

   