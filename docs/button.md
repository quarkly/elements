# Button

Buttons are interactive elements used to get an action. They usually contain text, but may contain icons, or both. Buttons can be a part of a composite element, e. g. form or card.

<img alt="button " src="src/button.png" width="400px">

// Image 800x600 with border and white bg

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Button, Text } from '@quarkly/elements';

ReactDom.render(
    <Button variant="outline">
      <Text variant="base">
        Submit
      </Text>
    </Button>
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

#### Typography

- fontSize
- color

#### Spaces

- padding
- paddingTop
- paddingRight
- paddingBottom
- paddingLeft
- paddingX
- paddingY
- margin
- marginTop
- marginRight
- marginBottom
- marginLeft
- marginX
- marginY

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

#### Background

- background
- backgroundColor
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
