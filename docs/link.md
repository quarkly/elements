# Link

Links defines a hyperlink, which is used to link from one page to another. It is a tag `a`. They also can links from one place on the page to another.

<img alt="link" src="src/link.png" width="400px">

// Image 800x600

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Link, Text } from '@quarkly/elements';

ReactDom.render(
  <Link href="https://quarkly.space/">
    <Text variant="base" color="#007bff" hoverColor="#0056b3">
      Quarkly
    </Text>
  </Link>
  document.getElementById('root'),
);
```

## Props

### Style props

#### Base

- variant
- href
- name
- target
- title

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

#### Typography

- fontSize
- color

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
