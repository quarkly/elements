# Text

The Text element is a wrapper that will apply typography styles to the text inside. Basically, it is a tag `p`.

<img alt="text" src="src/text.png" width="400px">

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

#### Typography

- fontSize / fz
- color / c
- fontFamily / ff
- fontWeight / fw
- textAlign / ta
- lineHeight / lh
- fontStyle / fs
- letterSpacing / lts

#### Flex

- flex / fx
- order / ord

#### Grid

- justifySelf / js
- alignSelf / as

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
