# Carousel

It is a element for cycling through other elements with animation effect. All child elements will be slides of the carousel.

<img alt="carousel" src="src/carousel.png" width="400px">

// Image 800x600

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

- display
- height
- minHeight
- maxHeight
- width
- minWidth
- maxWidth
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

- flex
- order

#### Grid

- justifySelf
- alignSelf

#### Background

- bg
- background
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
