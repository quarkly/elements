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

- [variant](###variant)

#### Layout

- [display](###display)
- [height](###height)
- [minHeight](###minHeight)
- [maxHeight](###maxHeight)
- [width](###width)
- [minWidth](###minWidth)
- [maxWidth](###maxWidth)
- [size](###size)
- [verticalAlign](###verticalAlign)

#### Spaces

- [p](###p)
- [pt](###pt)
- [pr](###pr)
- [pb](###pb)
- [pl](###pl)
- [px](###px)
- [py](###py)
- [m](###m)
- [mt](###mt)
- [mr](###mr)
- [mb](###mb)
- [ml](###ml)
- [mx](###mx)
- [my](###my)

#### Flex

- [alignItems](###alignItems)
- [alignContent](###alignContent)
- [justifyItems](###justifyItems)
- [justifyContent](###justifyContent)
- [flexWrap](###flexWrap)
- [flexBasis](###flexBasis)
- [flexDirection](###flexDirection)
- [flex](###flex)
- [order](###order)

#### Grid

- [justifySelf](###justifySelf)
- [alignSelf](###alignSelf)
- [gridGap](###gridGap)
- [gridColumnGap](###gridColumnGap)
- [gridRowGap](###gridRowGap)
- [gridColumn](###gridColumn)
- [gridRow](###gridRow)
- [gridAutoFlow](###gridAutoFlow)
- [gridAutoColumns](###gridAutoColumns)
- [gridAutoRows](###gridAutoRows)
- [gridTemplateColumns](###gridTemplateColumns)
- [gridTemplateRows](###gridTemplateRows)
- [gridTemplateAreas](###gridTemplateAreas)
- [gridArea](###gridTemplateAreas)

#### Background

- [bg](###bg)
- [background](###background)
- [backgroundImage](###background)
- [backgroundSize](###backgroundSize)
- [backgroundPosition](###backgroundPosition)
- [backgroundRepeat](###backgroundRepeat)

#### Misc

- [border](###border)
- [borderTop](###borderTop)
- [borderRight](###borderRight)
- [borderBottom](###borderBottom)
- [borderLeft](###borderLeft)
- [borderColor](###borderColor)
- [borderRadius](###borderRadius)
- [opacity](###opacity)
- [boxShadow](###boxShadow)
- [overflow](###overflow)
- [borders](###borders)

#### Position

- [position](###position)
- [top](###top)
- [right](###right)
- [bottom](###bottom)
- [left](###left)
- [zIndex](###zIndex)

## Reference

### variant

One of the variants of this element which are described in the theme.
| Type | Default |
| ------ | :-----: |
| string | none |

### p

The shorthand of the "padding" css property. Are used to generate space around an element's content, inside of any defined borders.
| Type | Default |
| ----- | :-----: |
| string, number or massive | none |

### pt

The shorthand of the "padding-top" css property.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### pr

The shorthand of the "padding-right" css property.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### pb

The shorthand of the "padding-bottom" css property.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### pl

The shorthand of the "padding-left" css property.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### px

Both are "padding-right" and "padding-left" (x-asix) css properties.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### py

This property defines both are "padding-top" and "padding-bottom" (y-asix) css properties.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### m

The shorthand of the "margin" css property. Are used to sets the margins for an element, outside of any defined borders
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### mt

The shorthand of the "margin-top" css property.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### mr

The shorthand of the "margin-right" css property.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### mb

The shorthand of the "margin-bottom" css property.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### ml

The shorthand of the "margin-left" css property.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### mx

This property defines both are "margin-right" and "margin-left" (x-asix) css properties.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### my

Both are "margin-top" and "margin-bottom" (x-asix) css properties.
| Type | Default |
| ------ | :-----: |
| string, number or massive | none |

### bg

The shorthand of the "background-color" css property.
| Type | Default |
| ----------------- | :-----: |
| string or massive | none |

### display

This css property specifies the display behavior (the type of rendering box) of an element.
| Type | Default |
| ----- | :-----: |
| oneOf(inline, block, inline-block, flex, grid, none) or massive | block |

### height

This css property sets the height of an element. The height of an element does not include padding, borders, or margins!
| Type | Default |
| ----- | :-----: |
| string, number or massive | auto |

### minHeight

This css property defines the minimum height of an element.
| Type | Default |
| ----- | :-----: |
| string, number or massive | 0 |

### maxHeight

This css property defines the maximum height of an element.
| Type | Default |
| ----- | :-----: |
| string, number or massive | none |

### width

This css property sets the width of an element. The width of an element does not include padding, borders, or margins!
| Type | Default |
| ----- | :-----: |
| string, number or massive | auto |

### minWidth

This css property defines the minimum width of an element.
| Type | Default |
| ----- | :-----: |
| string, number or massive | 0 |

### maxWidth

This css property defines the maximum width of an element.
| Type | Default |
| ----- | :-----: |
| string, number or massive | none |

### size

This property defines both are "width" and "height" css properties.
| Type | Default |
| ------ | :-----: |
| string or massive | none |

### verticalAlign

This css property sets the vertical alignment of an element.
| Type | Default |
| ------ | :-----: |
| oneOf(baseline, text-top, text-bottom, sub, super) or massive | baseline |

### alignItems

This css property specifies the default alignment for items inside the flexible container.
| Type | Default |
| ------ | :-----: |
| oneOf(stretch, center, flex-start, flex-end, baseline, initial, inherit) or massive | stretch |

### justifyContent

This css property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).
| Type | Default |
| ------ | :-----: |
| oneOf(flex-start, flex-end, center, space-between, space-around, initial, inherit) or massive | flex-start |

### flexWrap

This css property specifies whether the flexible items should wrap or not.
| Type | Default |
| ------ | :-----: |
| oneOf(nowrap, wrap, wrap-reverse, initial, inherit) or massive | nowrap |

### flexDirection

This css property specifies the direction of the flexible items.
| Type | Default |
| ------ | :-----: |
| oneOf(row, row-reverse, column, column-reverse, initial, inherit) or massive | row |

### flex

This css property is a shorthand property for: flex-grow, flex-shrink, flex-basis.
| Type | Default |
| ------ | :-----: |
| string or massive | 0 1 auto |

### alignContent

This css property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines. There must be multiple lines of items for this property to have any effect!

| Type                                                                                                   | Default |
| ------------------------------------------------------------------------------------------------------ | :-----: |
| oneOf(stretch, center, flex-start, flex-end, space-between, space-around, initial, inherit) or massive | stretch |

### justifyItems

This css property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.

| Type                                                                                                                                                                                                                                                         | Default |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-----: |
| oneOf(auto, normal, stretch, center, start, end, flex-start, flex-end, self-start, self-end, left, right, baseline, first baseline, last baseline, safe center, unsafe center, legacy right, legacy left, legacy center, inherit, initial, unset) or massive |  none   |

### alignSelf

This css property specifies the alignment for the selected item inside the flexible container.

### justifySelf

| Type                                                                                                   | Default |
| ------------------------------------------------------------------------------------------------------ | :-----: |
| oneOf(stretch, center, flex-start, flex-end, space-between, space-around, initial, inherit) or massive | stretch |

### order

### flexBasis

### background

### backgroundImage

### backgroundSize

### backgroundPosition

### backgroundRepeat

### border - Рамка у кнопки. Свитчер.

### borderSize

### borderTop

### borderRight

### borderBottom

### borderLeft

### borderSize

### borderRadius

### borderColor

### opacity

### boxShadow

### overflow

### position

### top

### right

### bottom

### left

### zIndex
