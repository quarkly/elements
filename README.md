<br>
<a href="https://github.com/quarkly/elements">
  <img alt="elements" src="docs/src/q-elements.png" width="200px">
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
- [x] [Block](docs/block.md)
- [x] [Box](docs/box.md)
- [x] [Button](docs/button.md)
- [x] [Card](docs/card.md)
- [x] [Carousel](docs/carousel.md)
- [x] [Flex](docs/flex.md)
- [x] [Grid](docs/grid.md)
- [x] [Hr](docs/hr.md)
- [x] [Image](docs/image.md)
- [x] [Input](docs/input.md)
- [x] [Link](docs/link.md)
- [x] [List](docs/list.md)
- [x] [Select](docs/select.md)
- [x] [Spacer](docs/spacer.md)
- [x] [Tabs](docs/tabs.md)
- [x] [Text](docs/text.md)
- [x] [Theme](docs/theme.md)

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