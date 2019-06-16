# Spacer

Spacers are used to adding extra space around elements. It is just transparent `div` tag.

<img alt="spacer" src="src/spacer.png" width="400px">

// Image 800x600

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Spacer, Text } from '@quarkly/elements';

ReactDom.render(
  <Text variant="base">Content</Text>
  <Spacer/>
  <Text variant="base">Content</Text>
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

- flex
- order

#### Grid

- justifySelf
- alignSelf

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
