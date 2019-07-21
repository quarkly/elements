# Text

The Text element is a wrapper that applies typography styles to the text inside it. Basically, it is rendered (on the page) as `p` tag.

<img alt="text" src="src/text.png" width="800px">

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Text } from '@quarkly/elements';

ReactDom.render(
  <Text variant="base">
    Text example
  </Text>
  document.getElementById('root'),
);
```

## Props

### Style props

#### Base

- variant

#### Layout

- [display / d](https://github.com/quarkly/elementary/blob/master/docs/props.md#display)
- [height / h](https://github.com/quarkly/elementary/blob/master/docs/props.md#height)
- [minHeight / mih](https://github.com/quarkly/elementary/blob/master/docs/props.md#minheight)
- [mixHeight / mah](https://github.com/quarkly/elementary/blob/master/docs/props.md#maxheight)
- [width / w](https://github.com/quarkly/elementary/blob/master/docs/props.md#width)
- [minWidth / miw](https://github.com/quarkly/elementary/blob/master/docs/props.md#minwidth)
- [maxWidth / maw](https://github.com/quarkly/elementary/blob/master/docs/props.md#maxwidth)
- [size](https://github.com/quarkly/elementary/blob/master/docs/props.md#size)

#### Spaces

- [padding / p](https://github.com/quarkly/elementary/blob/master/docs/props.md#p)
- [paddingTop / pt](https://github.com/quarkly/elementary/blob/master/docs/props.md#pt)
- [paddingRight / pr](https://github.com/quarkly/elementary/blob/master/docs/props.md#pr)
- [paddingBottom / pb](https://github.com/quarkly/elementary/blob/master/docs/props.md#pb)
- [paddingLeft / pl](https://github.com/quarkly/elementary/blob/master/docs/props.md#pl)
- [paddingX / px](https://github.com/quarkly/elementary/blob/master/docs/props.md#px)
- [paddingY / py](https://github.com/quarkly/elementary/blob/master/docs/props.md#py)
- [margin / m](https://github.com/quarkly/elementary/blob/master/docs/props.md#m)
- [marginTop / mt](https://github.com/quarkly/elementary/blob/master/docs/props.md#mt)
- [marginRight / mr](https://github.com/quarkly/elementary/blob/master/docs/props.md#mr)
- [marginBottom / mb](https://github.com/quarkly/elementary/blob/master/docs/props.md#mb)
- [marginLeft / ml](https://github.com/quarkly/elementary/blob/master/docs/props.md#ml)
- [marginX / mx](https://github.com/quarkly/elementary/blob/master/docs/props.md#mx)
- [marginY / my](https://github.com/quarkly/elementary/blob/master/docs/props.md#my)

#### Typography

- [fontSize / fz](https://github.com/quarkly/elementary/blob/master/docs/props.md#fontsize)
- [color / c](https://github.com/quarkly/elementary/blob/master/docs/props.md#color)
- [fontFamily / ff](https://github.com/quarkly/elementary/blob/master/docs/props.md#fontfamily)
- [fontWeight / fw](https://github.com/quarkly/elementary/blob/master/docs/props.md#fontweight)
- [textAlign / ta](https://github.com/quarkly/elementary/blob/master/docs/props.md#textalign)
- [lineHeight / lh](https://github.com/quarkly/elementary/blob/master/docs/props.md#lineheight)
- [fontStyle / fs](https://github.com/quarkly/elementary/blob/master/docs/props.md#fontstyle)
- [letterSpacing / lts](https://github.com/quarkly/elementary/blob/master/docs/props.md#letterspacing)

#### Flex

- [flex / fx](https://github.com/quarkly/elementary/blob/master/docs/props.md#flex)
- [order / ord](https://github.com/quarkly/elementary/blob/master/docs/props.md#order)

#### Grid

- [justifySelf / js](https://github.com/quarkly/elementary/blob/master/docs/props.md#justifyself)
- [alignSelf / as](https://github.com/quarkly/elementary/blob/master/docs/props.md#alignself)

#### Background

- [background / bg](https://github.com/quarkly/elementary/blob/master/docs/props.md#background-1)
- [backgroundColor / bgc](https://github.com/quarkly/elementary/blob/master/docs/props.md#bgc)
- [backgroundImage / bgi](https://github.com/quarkly/elementary/blob/master/docs/props.md#backgroundimage)
- [backgroundSize / bgsz](https://github.com/quarkly/elementary/blob/master/docs/props.md#backgroundsize)
- [backgroundPosition / bgp](https://github.com/quarkly/elementary/blob/master/docs/props.md#backgroundposition)
- [backgroundRepeat / bgr](https://github.com/quarkly/elementary/blob/master/docs/props.md#backgroundrepeat)

#### Misc

- [border / bd](https://github.com/quarkly/elementary/blob/master/docs/props.md#border)
- [borderTop / bdt](https://github.com/quarkly/elementary/blob/master/docs/props.md#bordertop)
- [borderRight / bdr](https://github.com/quarkly/elementary/blob/master/docs/props.md#borderright)
- [borderBottom / bdb](https://github.com/quarkly/elementary/blob/master/docs/props.md#borderbottom)
- [borderLeft / bdl](https://github.com/quarkly/elementary/blob/master/docs/props.md#borderleft)
- [borderColor / bdc](https://github.com/quarkly/elementary/blob/master/docs/props.md#bordercolor)
- [borderRadius / bdrs](https://github.com/quarkly/elementary/blob/master/docs/props.md#borderradius)
- [opacity / op](https://github.com/quarkly/elementary/blob/master/docs/props.md#opacity)
- [boxShadow / bxsh](https://github.com/quarkly/elementary/blob/master/docs/props.md#boxshadow)
- [overflow / ov](https://github.com/quarkly/elementary/blob/master/docs/props.md#overflow)

#### Position

- [position / pos](https://github.com/quarkly/elementary/blob/master/docs/props.md#position)
- [top / t](https://github.com/quarkly/elementary/blob/master/docs/props.md#top)
- [right / r](https://github.com/quarkly/elementary/blob/master/docs/props.md#right)
- [bottom / b](https://github.com/quarkly/elementary/blob/master/docs/props.md#bottom)
- [left / l](https://github.com/quarkly/elementary/blob/master/docs/props.md#left)
- [zIndex / z](https://github.com/quarkly/elementary/blob/master/docs/props.md#zIndex)
