import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, color, array, select } from '@storybook/addon-knobs';
import Card from '../card';
import Theme from '../theme';
import Image from '../image';
import Text from '../text';
import Button from '../button';
import Flex from './index';

const stories = storiesOf('Flex', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Card />
  </Theme>
));

stories.add('with card', () => (
  <Theme>
    <Card>
      <Image height="200px" src="https://picsum.photos/200" />
      <Text p="10px">Some text</Text>
      <Flex alignItems="center" justifyContent="center">
        <Button m="10px">Click</Button>
        <Button m="10px">Click</Button>
        <Button m="10px">Click</Button>
      </Flex>
    </Card>
  </Theme>
));
stories.add('with props', () => (
  <Theme>
    <Flex
      p={text('p', '20px', 'Core')}
      pt={text('pt', '', 'Core')}
      pr={text('pr', '', 'Core')}
      pb={text('pb', '', 'Core')}
      pl={text('pl', '', 'Core')}
      px={text('px', '', 'Core')}
      py={text('py', '', 'Core')}
      m={text('m', '20px', 'Core')}
      mt={text('mt', '', 'Core')}
      mr={text('mr', '', 'Core')}
      mb={text('mb', '', 'Core')}
      ml={text('ml', '', 'Core')}
      mx={text('mx', '', 'Core')}
      my={text('my', '', 'Core')}
      bg={array('bg', ['lightslategrey'], 'Core')}
      display={select(
        'display',
        {
          flex: 'flex',
          none: 'none',
        },
        'flex',
        'Layout',
      )}
      size={text('size', '', 'Layout')}
      width={text('width', '300px', 'Layout')}
      minWidth={text('minWidth', '', 'Layout')}
      maxWidth={text('maxWidth', '', 'Layout')}
      height={text('height', '300px', 'Layout')}
      minHeight={text('minHeight', '', 'Layout')}
      maxHeight={text('maxHeight', '', 'Layout')}
      alignItems={select(
        'align-items',
        {
          'flex-start': 'flex-start',
          'flex-end': 'flex-end',
          center: 'center',
          baseline: 'baseline',
          stretch: 'stretch',
        },
        'stretch',
        'Flexbox',
      )}
      justifyContent={select(
        'justifyContent',
        {
          'flex-start': 'flex-start',
          'flex-end': 'flex-end',
          center: 'center',
          'space-between': 'space-between',
          'space-around': 'space-around',
          'space-evenly': 'space-evenly',
        },
        'flex-start',
        'Flexbox',
      )}
      flexWrap={select(
        'flexWrap',
        {
          nowrap: 'nowrap',
          wrap: 'wrap',
          'wrap-reverse': 'wrap-reverse',
        },
        'nowrap',
        'Flexbox',
      )}
      flexDirection={select(
        'flexDirection',
        {
          row: 'row',
          'row-reverse': 'row-reverse',
          column: 'column',
          'column-reverse': 'column-reverse',
        },
        'row',
        'Flexbox',
      )}
      flex={text('flex', '', 'Flexbox')}
      alignContent={select(
        'alignContent',
        {
          'flex-start': 'flex-start',
          'flex-end': 'flex-end',
          center: 'center',
          'space-between': 'space-between',
          'space-around': 'space-around',
          'space-evenly': 'space-evenly',
          stretch: 'stretch',
        },
        'flex-start',
        'Flexbox',
      )}
      justifyItems={select(
        'justifyItems',
        {
          stretch: 'stretch',
          center: 'center',
          start: 'start',
          end: 'end',
          baseline: 'baseline',
          inherit: 'inherit',
        },
        'stretch',
        'Flexbox',
      )}
      justifySelf={select(
        'justifySelf',
        {
          'flex-start': 'flex-start',
          'flex-end': 'flex-end',
          center: 'center',
          'space-between': 'space-between',
          'space-around': 'space-around',
          'space-evenly': 'space-evenly',
        },
        'flex-start',
        'Flexbox',
      )}
      alignSelf={select(
        'alignSelf',
        {
          auto: 'auto',
          'flex-start': 'flex-start',
          'flex-end': 'flex-end',
          center: 'center',
          baseline: 'baseline',
          stretch: 'stretch',
        },
        'flex-start',
        'Flexbox',
      )}
      order={number('order', '', 'Flexbox')}
      flexBasis={text('flexBasis', '', 'Flexbox')}
      background={text('background', '', 'Background')}
      backgroundImage={text('backgroundImage', 'url()', 'Background')}
      backgroundSize={select(
        'backgroundSize',
        {
          auto: 'auto',
          cover: 'cover',
          contain: 'contain',
        },
        'auto',
        'Background',
      )}
      backgroundPosition={select(
        'backgroundPosition',
        {
          'top left': 'top left',
          'top center': 'top center',
          'top right': 'top right',
          'center left': 'center left',
          'center center': 'center center',
          'center right': 'center right',
          'bottom left': 'bottom left',
          'bottom center': 'bottom center',
          'bottom right': 'bottom right',
          inherit: 'inherit',
        },
        'center center',
        'Background',
      )}
      backgroundRepeat={select(
        'backgroundRepeat',
        {
          'no-repeat': 'no-repeat',
          repeat: 'repeat',
          'repeat-x': 'repeat-x',
          'repeat-y': 'repeat-y',
          space: 'space',
          round: 'round',
          inherit: 'inherit',
        },
        'no-repeat',
        'Background',
      )}
      border={text('border', '', 'Misc')}
      borderTop={text('borderTop', '', 'Misc')}
      borderRight={text('borderRight', '', 'Misc')}
      borderBottom={text('borderBottom', '', 'Misc')}
      borderLeft={text('borderLeft', '', 'Misc')}
      borderWidth={text('borderWidth', '', 'Misc')}
      borderStyle={select(
        'borderStyle',
        {
          none: 'none',
          solid: 'solid',
          hidden: 'hidden',
          dashed: 'dashed',
          dotted: 'dotted',
          double: 'double',
        },
        'solid',
        'Misc',
      )}
      borderColor={color('borderColor', '', 'Misc')}
      borderRadius={text('borderRadius', '', 'Misc')}
      boxShadow={text('boxShadow', '', 'Misc')}
      opacity={number('opacity', '', 'Misc')}
      overflow={select(
        'overflow',
        {
          visible: 'visible',
          hidden: 'hidden',
          scroll: 'scroll',
          auto: 'auto',
          inherit: 'inherit',
        },
        'visible',
        'Misc',
      )}
      position={select(
        'position',
        {
          absolute: 'absolute',
          fixed: 'fixed',
          relative: 'relative',
          static: 'static',
          inherit: 'inherit',
        },
        'static',
        'Position',
      )}
      zIndex={text('zIndex', '', 'Position')}
      top={text('top', '', 'Position')}
      right={text('right', '', 'Position')}
      bottom={text('bottom', '', 'Position')}
      left={text('left', '', 'Position')}
    />
  </Theme>
));
