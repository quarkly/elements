# Card

Usually cards display a few info about products, services or persons and actions, e.g. "view details", "contact". Cards are composite elements. They can containing text, button, image, etc.

<img alt="card" src="src/card.png" width="320">

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Card, Flex, Text, Button } from '@quarkly/elements';

ReactDom.render(
  <Card variant="vertical">
    <Flex
      minHeight="200px"
      backgroundSize="cover"
      width="100%"
      backgroundPosition="center center"
      backgroundImage="url(https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
    />
    <Flex flexDirection="column" p="20px" pb="32px" alignItems="flex-start">
      <Text variant="h3" m="0">
        The Moon
      </Text>
      <Text variant="base">
        The Moon is an astronomical body that orbits planet Earth and is Earths only permanent
        natural satellite.
      </Text>
      <Button>Read more</Button>
    </Flex>
  </Card>,
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
