# Link

Links defines a hyperlink, which is used to link from one page to another. It is a tag `a`. They also can links from one place on the page to another.

<img alt="link" src="src/link.png" width="400px">

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
