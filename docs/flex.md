# Flex

Flexes are simple containers for different tasks, e.g. to create the necessary arrangement of child elements. It is a tag `div` with display="flex" property. Flexes are composite elements. They can containing other elements.

<img alt="flex" src="src/flex.png" width="800px">

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Flex, Text } from '@quarkly/elements';

ReactDom.render(
  <Flex width="1/2" bg="royalblue">
    <Text variant="h1" m="0" textAlign="center" color="white">
      Flex
    </Text>
  </Flex>
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
