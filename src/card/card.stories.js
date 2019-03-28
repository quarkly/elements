import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, select, number } from '@storybook/addon-knobs';
import Card from './index';
import Theme from '../theme';
import Text from '../text';
import Flex from '../flex';
import Button from '../button';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Theme>
      <Card />
    </Theme>
  ))
  .add('with content vertical', () => (
    <Theme>
      <Card variant="vertical">
        <Flex
          minHeight="200px"
          backgroundSize="cover"
          width="100%"
          backgroundPosition="center center"
          backgroundImage="url(https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        />
        <Flex flexDirection="column" p="20px" pb="32px" alignItems="flex-start">
          <Text variant="h3" m="0">
            {text('Heading', 'The Moon', 'Data')}
          </Text>
          <Text variant="base">
            {text(
              'Paragraph',
              'The Moon is an astronomical body that orbits planet Earth and is Earths only permanent natural satellite.',
              'Data',
            )}
          </Text>
          <Button>{text('Label', 'Read more', 'Data')}</Button>
        </Flex>
      </Card>
    </Theme>
  ))
  .add('with content horizontal', () => (
    <Theme>
      <Card variant="horizontal">
        <Flex
          maxWidth="280px"
          backgroundSize="cover"
          width="100%"
          backgroundPosition="center center"
          backgroundImage="url(https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        />
        <Flex flexDirection="column" ml="20px" p="20px" pb="32px" alignItems="flex-start">
          <Text variant="h3" m="0">
            {text('Heading', 'The Moon', 'Data')}
          </Text>
          <Text variant="base">
            {text(
              'Paragraph',
              'The Moon is an astronomical body that orbits planet Earth and is Earths only permanent natural satellite.',
              'Data',
            )}
          </Text>
          <Button>{text('Label', 'Read more', 'Data')}</Button>
        </Flex>
      </Card>
    </Theme>
  ))

  .add('with props', () => (
    <Theme>
      <Card
        variant={select(
          'variant',
          {
            vertical: 'vertical',
            horizontal: 'horizontal',
          },
          'vertical',
          'Layout',
        )}
        p={text('p', '', 'Core')}
        paddingTop={text('paddingTop', '', 'Core')}
        paddingRight={text('paddingRight', '', 'Core')}
        paddingBottom={text('paddingBottom', '', 'Core')}
        paddingLeft={text('paddingLeft', '', 'Core')}
        px={text('px', '', 'Core')}
        py={text('py', '', 'Core')}
        m={text('m', '', 'Core')}
        marginTop={text('marginTop', '', 'Core')}
        marginRight={text('marginRight', '', 'Core')}
        marginBottom={text('marginBottom', '', 'Core')}
        marginLeft={text('marginLeft', '', 'Core')}
        mx={text('mx', '', 'Core')}
        my={text('my', '', 'Core')}
        bg={color('bg', '', 'Core')}
        display={select(
          'display',
          {
            block: 'block',
            flex: 'flex',
            inline: 'inline',
            'inline-block': 'inline-block',
            grid: 'grid',
            none: 'none',
          },
          'block',
          'Layout',
        )}
        size={text('size', '', 'Layout')}
        width={text('width', '', 'Layout')}
        minWidth={text('minWidth', '', 'Layout')}
        maxWidth={text('maxWidth', '', 'Layout')}
        height={text('height', '', 'Layout')}
        minHeight={text('minHeight', '', 'Layout')}
        maxHeight={text('maxHeight', '', 'Layout')}
        alignItems={select(
          'alignItems',
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
        order={number('order', '', '{0}', 'Flexbox')}
        flexBasis={text('flexBasis', '', 'Flexbox')}
        gridGap={text('gridGap', '', 'Grid')}
        gridRowGap={text('gridRowGap', '', 'Grid')}
        gridColumnGap={text('gridColumnGap', '', 'Grid')}
        gridColumn={text('gridColumn', '', 'Grid')}
        gridRow={text('gridRow', '', 'Grid')}
        gridArea={text('gridArea', '', 'Grid')}
        gridAutoFlow={select(
          'gridAutoFlow',
          {
            row: 'row',
            column: 'column',
            dense: 'dense',
            'row dense': 'row dense',
            'column dense': 'column dense',
          },
          'row',
          'Grid',
        )}
        gridAutoRows={text('gridAutoRows', '', 'Grid')}
        gridAutoColumns={text('gridAutoColumns', '', 'Grid')}
        gridTemplateRows={text('gridTemplateRows', '', 'Grid')}
        gridTemplateColumns={text('gridTemplateColumns', '', 'Grid')}
        gridTemplateAreas={text('gridTemplateAreas', '', 'Grid')}
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
        opacity={number('opacity', '', '{1}', 'Misc')}
        overflow={select(
          'overflow',
          {
            visible: 'visible',
            hidden: 'hidden',
            scroll: 'scroll',
            auto: 'auto',
            inherit: 'inherit',
          },
          'auto',
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
        left={text('left', '', 'Position')}>
        <Flex
          minHeight="200px"
          backgroundSize="cover"
          width="100%"
          backgroundPosition="center center"
          backgroundImage="url(https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        />
        <Flex flexDirection="column" p="20px" pb="32px" alignItems="flex-start">
          <Text variant="h3" m="0">
            {text('Heading', 'The Moon', 'Data')}
          </Text>
          <Text variant="base">
            {text(
              'Paragraph',
              'The Moon is an astronomical body that orbits planet Earth and is Earths only permanent natural satellite.',
              'Data',
            )}
          </Text>
          <Button>{text('Label', 'Read more', 'Data')}</Button>
        </Flex>
      </Card>
    </Theme>
  ));
