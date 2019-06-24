<br>
<a href="https://github.com/quarkly/elements">
  <img alt="elements" src="https://github.com/quarkly/elements/raw/master/docs/src/q-elements.png" width="200px">
</a>

# WIP:Elements UI

Elements — atomic react UI components based on [Elementary](https://github.com/quarkly/elementary).

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

## Get started

### Installation

```sh
npm i @quarkly/elements
```

### Usage

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

## Components

- [x] [Block](https://github.com/quarkly/elements/blob/master/docs/block.md)
- [x] [Box](https://github.com/quarkly/elements/blob/master/docs/box.md)
- [x] [Button](https://github.com/quarkly/elements/blob/master/docs/button.md)
- [x] [Card](https://github.com/quarkly/elements/blob/master/docs/card.md)
- [x] [Carousel](https://github.com/quarkly/elements/blob/master/docs/carousel.md)
- [x] [Flex](https://github.com/quarkly/elements/blob/master/docs/flex.md)
- [x] [Grid](https://github.com/quarkly/elements/blob/master/docs/grid.md)
- [x] [Hr](https://github.com/quarkly/elements/blob/master/docs/hr.md)
- [x] [Image](https://github.com/quarkly/elements/blob/master/docs/image.md)
- [x] [Link](https://github.com/quarkly/elements/blob/master/docs/link.md)
- [x] [List](https://github.com/quarkly/elements/blob/master/docs/list.md)
- [x] [Spacer](https://github.com/quarkly/elements/blob/master/docs/spacer.md)
- [x] [Text](https://github.com/quarkly/elements/blob/master/docs/text.md)

Soon

- [ ] Video
- [ ] Icon
- [ ] Map
- [ ] Drawer
- [ ] Gallery
- [ ] Menu
- [ ] Submenu
- [ ] Popup
- [ ] Footer
- [ ] Accordion
- [ ] Form
- [ ] Schedule
- [ ] Timeline
- [ ] Stages
- [ ] Social buttons
- [ ] Timer
- [ ] Payment
- [ ] Facebook feed
