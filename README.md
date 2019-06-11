# WIP:Elements UI

Elements - atomic react UI components based on [Elementary](https://github.com/quarkly/elementary).

[![Version][version-badge]][npm]

[version-badge]: https://flat.badgen.net/npm/v/@quarkly/elements
[npm]: https://npmjs.com/package/@quarkly/elements
# Installation and Usage

```sh
npm i @quarkly/elements
```


```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { Box, Text } from '@quarkly/elements';

ReactDom.render(
  <Box width={[1, 1 / 2, 1 / 4]} bgc={['red', 'green', 'blue']} height="300px">
    <Text fz={2}>Hello from Elements</Text>
  </Box>,
  document.getElementById('root'),
);
```
