# Block

Blocks are logical units of content on pages. It is a tag `section` with height=("100vh"). Blocks are composite elements. They can containing other elements.

<img alt="block" src="src/block.png" width="400px">

// Image 800x600 with border and white bg

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Block, Text } from '@quarkly/elements';

ReactDom.render(
  <Block border="2px solid royalblue">
    <Text variant="h1" m="0" textAlign="center">
      Block
    </Text>
  </Block>
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
- verticalAlign

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
