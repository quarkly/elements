# Flex

Flexes are simple containers for different tasks, e.g. to create the necessary arrangement of child elements. It is a tag `div` with display="flex" property. Flexes are composite elements. They can containing other elements.

<img alt="flex" src="src/flex.png" width="400px">

// Image 800x600 with border and white bg

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Flex, Text } from '@quarkly/elements';

ReactDom.render(
  <Flex width="1/2" bg="royalblue">
    <Text variant="h1" m="0" textAlign="center" color="white">
      Flex
    </Text>
  </Flex>
  document.getElementById('root'),
);
```

## Props

### Style props

#### Base

- variant

#### Layout

- display
- height
- minHeight
- maxHeight
- width
- minWidth
- maxWidth
- size

#### Spaces

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

#### Flex

- alignItems
- alignContent
- justifyItems
- justifyContent
- flexWrap
- flexBasis
- flexDirection
- flex
- order

#### Grid

- justifySelf
- alignSelf
- gridGap
- gridColumnGap
- gridRowGap
- gridColumn
- gridRow
- gridAutoFlow
- gridAutoColumns
- gridAutoRows
- gridTemplateColumns
- gridTemplateRows
- gridTemplateAreas
- gridArea

#### Background

- bg
- background
- backgroundImage
- backgroundSize
- backgroundPosition
- backgroundRepeat

#### Misc

- border
- borderTop
- borderRight
- borderBottom
- borderLeft
- borderColor
- borderRadius
- opacity
- boxShadow
- overflow

#### Position

- position
- top
- right
- bottom
- left
- zIndex
