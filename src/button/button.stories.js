import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, select, number } from '@storybook/addon-knobs';
import Button from './index';
import Theme from '../theme';
import Block from '../block';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Button>{text('Label', 'Default')}</Button>
  </Theme>
));
stories.add('active', () => (
  <Theme>
    <Button className="active" bgc="black" activeBgc="red">
      {text('Label', 'Active')}
    </Button>
  </Theme>
));
stories.add('hover', () => (
  <Theme>
    <Button className="active" bgc="black" hoverBgc="red">
      {text('Label', 'Active')}
    </Button>
  </Theme>
));
stories.add('hover & active', () => (
  <Theme>
    <Button className="active" activeBgc="yellow" hoverBgc="red">
      {text('Label', 'Active')}
    </Button>
  </Theme>
));
stories.add('outline', () => (
  <Theme>
    <Button variant="outline">{text('Label', 'Outline')}</Button>
  </Theme>
));
stories.add('with props', () => (
  <Theme>
    <Block display="flex">
      <Button
        p={text('padding', '', 'Core')}
        paddingTop={text('paddingTop', '', 'Core')}
        paddingRight={text('paddingRight', '', 'Core')}
        paddingBottom={text('paddingBottom', '', 'Core')}
        paddingLeft={text('paddingLeft', '', 'Core')}
        px={text('paddingX', '', 'Core')}
        py={text('paddingY', '', 'Core')}
        m={text('margin', '', 'Core')}
        marginTop={text('marginTop', '', 'Core')}
        marginRight={text('marginRight', '', 'Core')}
        marginBottom={text('marginBottom', '', 'Core')}
        marginLeft={text('marginLeft', '', 'Core')}
        mx={text('marginX', '', 'Core')}
        my={text('marginY', '', 'Core')}
        bg={color('background', '', 'Core')}
        hoverBg={color('hoverBg', '', 'Core')}
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
        order={number('order', '', '{0}', 'Flexbox')}
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
        {text('Label', 'With Props', 'Data')}
      </Button>
    </Block>
  </Theme>
));
