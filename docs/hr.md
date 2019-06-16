# Hr

Hrs are using to define a thematic break in the content.

<img alt="hr" src="src/hr.png" width="400px">

// Image 800x600 with border and white bg

## Usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Hr, Text } from '@quarkly/elements';

ReactDom.render(
    <Text variant="h1" m="0" textAlign="center" color="white">
      First theme
    </Text>
    <Hr/>
    <Text variant="h1" m="0" textAlign="center" color="white">
      Second theme
    </Text>
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

#### Background

- bg

#### Misc

- opacity