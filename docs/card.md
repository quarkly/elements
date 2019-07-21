# Card

Usually, cards display a brief info about products, services or persons and actions, e.g. "view details", "contact". Cards are composite elements. They can contain text, button, image, etc.

<img alt="card" src="src/card.png" width="800px">

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

- [display / d](https://github.com/quarkly/elementary/blob/master/docs/props.md#display)
- [height / h](https://github.com/quarkly/elementary/blob/master/docs/props.md#height)
- [minHeight / mih](https://github.com/quarkly/elementary/blob/master/docs/props.md#minheight)
- [mixHeight / mah](https://github.com/quarkly/elementary/blob/master/docs/props.md#maxheight)
- [width / w](https://github.com/quarkly/elementary/blob/master/docs/props.md#width)
- [minWidth / miw](https://github.com/quarkly/elementary/blob/master/docs/props.md#minwidth)
- [maxWidth / maw](https://github.com/quarkly/elementary/blob/master/docs/props.md#maxwidth)
- [size](https://github.com/quarkly/elementary/blob/master/docs/props.md#size)
- [verticalAlign / va](https://github.com/quarkly/elementary/blob/master/docs/props.md#verticalalign)

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

#### Flex

- [alignItems / ai](https://github.com/quarkly/elementary/blob/master/docs/props.md#alignitems)
- [alignContent / ac](https://github.com/quarkly/elementary/blob/master/docs/props.md#aligncontent)
- [justifyItems / ji](https://github.com/quarkly/elementary/blob/master/docs/props.md#justifyitems)
- [justifyContent / jc](https://github.com/quarkly/elementary/blob/master/docs/props.md#justifycontent)
- [flexWrap / fxw](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexwrap)
- [flexBasis / fxb](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexbasis)
- [flexDirection / fxd](https://github.com/quarkly/elementary/blob/master/docs/props.md#flexdirection)
- [flex / fx](https://github.com/quarkly/elementary/blob/master/docs/props.md#flex)
- [order / ord](https://github.com/quarkly/elementary/blob/master/docs/props.md#order)

#### Grid

- [justifySelf / js](https://github.com/quarkly/elementary/blob/master/docs/props.md#justifyself)
- [alignSelf / as](https://github.com/quarkly/elementary/blob/master/docs/props.md#alignself)
- [gridGap](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridgap)
- [gridColumnGap](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridcolumngap)
- [gridRowGap](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridrowgap)
- [gridColumn](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridcolumn)
- [gridRow](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridrow)
- [gridAutoFlow](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridautoflow)
- [gridAutoColumns](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridautocolumns)
- [gridAutoRows](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridautorows)
- [gridTemplateColumns](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridtemplatecolumns)
- [gridTemplateRows](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridtemplaterows)
- [gridTemplateAreas](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridtemplateareas)
- [gridArea](https://github.com/quarkly/elementary/blob/master/docs/props.md#gridarea)

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
