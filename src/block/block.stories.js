import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, color, select } from '@storybook/addon-knobs';
import Block from './index';
import Text from '../text';
import Theme from '../theme';

const stories = storiesOf('Block', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Block />
  </Theme>
));

stories.add('with props', () => (
  <Theme>
    <Block
      p={text('padding', '20px', 'Core')}
      paddingTop={text('paddingTop', '', 'Core')}
      paddingRight={text('paddingRight', '', 'Core')}
      paddingBottom={text('paddingBottom', '', 'Core')}
      paddingLeft={text('paddingLeft', '', 'Core')}
      px={text('paddingX', '', 'Core')}
      py={text('paddingY', '', 'Core')}
      m={text('margin', '20px', 'Core')}
      marginTop={text('marginTop', '', 'Core')}
      marginRight={text('marginRight', '', 'Core')}
      marginBottom={text('marginBottom', '', 'Core')}
      marginLeft={text('marginLeft', '', 'Core')}
      mx={text('marginX', '', 'Core')}
      my={text('marginY', '', 'Core')}
      bg={color('background', 'lightslategrey', 'Core')}
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
      background={text('backgroundColor', '', 'Background')}
      backgroundImage={text('backgroundImage', 'url()', 'Background')}
      backgroundSize={select(
        'backgroundSize',
        {
          auto: 'auto',
          cover: 'cover',
          contain: 'contain',
        },
        'auto',
        'backgroundColor',
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
        'backgroundColor',
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
        'backgroundColor',
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
      zIndex={number('zIndex', 1, 'Position')}
      top={text('top', '', 'Position')}
      right={text('right', '', 'Position')}
      bottom={text('bottom', '', 'Position')}
      left={text('left', '', 'Position')}>
      <Text variant="h2" color="black">
        Text
      </Text>
    </Block>
  </Theme>
));
