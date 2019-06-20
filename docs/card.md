# Card

Usually cards display a few info about products, services or persons and actions, e.g. "view details", "contact". Cards are composite elements. They can containing text, button, image, etc.

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

- display / d
- height / h
- minHeight / mih
- maxHeight / mah
- width / w
- minWidth / miw
- maxWidth / maw
- size
- verticalAlign / va

#### Spaces

- padding / p
- paddingTop / pt
- paddingRight / pr
- paddingBottom / pb
- paddingLeft / pl
- paddingX / px
- paddingY / py
- margin / m
- marginTop / mt
- marginRight / mr
- marginBottom / mb
- marginLeft / ml
- marginX / mx
- marginY / my

#### Flex

- alignItems / ai
- alignContent / ac
- justifyItems / ji
- justifyContent / jc
- flexWrap / fxw
- flexBasis / fxb
- flexDirection / fxd
- flex / fx
- order / ord

#### Grid

- justifySelf / js
- alignSelf / as
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

- background / bg
- backgroundColor / bgc
- backgroundImage / bgi
- backgroundSize / bgsz
- backgroundPosition / bgp
- backgroundRepeat / bgr

#### Misc

- border / bd
- borderTop / bdt
- borderRight / bdr
- borderBottom / bdb
- borderLeft / bdl
- borderColor / bdc
- borderRadius / bdrs
- opacity / op
- boxShadow / bxsh
- overflow / ov

#### Position

- position / pos
- top / t
- right / r
- bottom / b
- left / l
- zIndex / z
