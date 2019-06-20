# Carousel

It is a element for cycling through other elements with animation effect. All child elements will be slides of the carousel.

<img alt="carousel" src="src/carousel.png" width="800px">

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Carousel, Image } from '@quarkly/elements';

ReactDom.render(
    <Carousel dots height="400px" bg="black">
      <Image
        src="https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg"
        variant="fluid"
        height="400px"
      />
      <Image
        src="https://photojournal.jpl.nasa.gov/jpeg/PIA18182.jpg"
        variant="fluid"
        height="400px"
      />
      <Image
        src="https://www.jpl.nasa.gov/images/cassini/20160408/PIA11141-16.jpg"
        variant="fluid"
        height="400px"
      />
    </Carousel>
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

- flex / fx
- order / ord

#### Grid

- justifySelf / js
- alignSelf / as

#### Background

- bg
- background / bg
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
