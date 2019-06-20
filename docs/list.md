# List

Lists defines an unordered list. They use for group similar entities. It is a tag `ul`. All child elements will be wrapped in a `li` tag.

<img alt="list" src="src/list.png" width="400px">

// Image 800x600

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { List, Text } from '@quarkly/elements';

ReactDom.render(
  <List>
    <Text variant="base">
      Item 1
    </Text>
    <Text variant="base">
      Item 2
    </Text>
    <Text variant="base">
      Item 3
    </Text>
  </List>
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

#### Typography

- fontSize
- color

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
