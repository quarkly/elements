# Button  
Buttons are interactive elements used to get an action. They may contain text, icons, or both. Buttons can be a part of a composite element, e. g. form or card.

## Usage
```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Button } from '@quarkly/elements';

ReactDom.render(
    <Button variant="outline">Submit</Button>
  document.getElementById('root'),
);
```

## Props

### Universal props
- children
   - text
   - icon
- id
  
### Style props
- [variant](####variant)
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
- height
   - minHeight
   - maxHeight
- width
   - minWidth
   - maxWidth
- size
- alignSelf
- justifySelf
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
- boxShadow
- position
   - top
   - right
   - bottom
   - left
- zIndex

### Functional props
- href
   - targetBlank

## Reference
#### Variant
The variation of the element that is defined in the theme
| Type   | Default |
| ------ | :-----: |
| string |  none   |