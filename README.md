# WIP:Elements UI

Elements - atomic react UI components based on [Elementary](https://github.com/quarkly/elementary).

[![Build Status][badge]][travis]
[![Coverage][coverage-badge]][coverage]
[![Version][version-badge]][npm]
![MIT License][license]

[badge]: https://flat.badgen.net/travis/quarkly/elements/master
[travis]: https://travis-ci.com/quarkly/elements
[coverage-badge]: https://flat.badgen.net/codecov/c/github/quarkly/elements
[coverage]: https://codecov.io/github/quarkly/elements
[version-badge]: https://flat.badgen.net/npm/v/@quarkly/elements
[npm]: https://npmjs.com/package/@quarkly/elements
[license]: https://flat.badgen.net/badge/license/MIT/blue

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
