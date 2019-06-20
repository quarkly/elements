import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, color, array, select } from '@storybook/addon-knobs';
import Card from '../card';
import Theme from '../theme';
import Text from '../text';
import Image from '../image';
import Button from '../button';
import Box from '../box';
import Grid from './index';

const stories = storiesOf('Grid', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Theme>
    <Grid />
  </Theme>
));

stories.add('with image', () => (
  <Theme>
    <Grid
      gridTemplateColumns="2fr 1fr 2fr"
      gridColumnGap="12px"
      gridRowGap="12px"
      gridAutoRows="minmax(100px, auto)"
      alignItems="stretch">
      <Image src="https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg" />
      <Image src="https://photojournal.jpl.nasa.gov/jpeg/PIA18182.jpg" />
      <Image src="https://www.jpl.nasa.gov/images/cassini/20160408/PIA11141-16.jpg" />
      <Image src="https://cdn.mos.cms.futurecdn.net/DfcnU8Z2yeyrYLmsRCKtDH.jpg" />
      <Image src="https://solarsystem.nasa.gov/system/downloadable_items/1193_pluto_natural_color_20150714_detail.jpg" />
      <Image src="https://solarsystem.nasa.gov/system/resources/detail_files/771_PIA16853.jpg" />
    </Grid>
  </Theme>
));
stories.add('with boxes', () => (
  <Theme>
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gridColumnGap="12px"
      gridRowGap="12px"
      gridAutoRows="minmax(100px, auto)">
      <Box bg="darkgrey" p="12px">
        <Text variant="h2">
          Although we will never watch two suns rise and fall from the perspective of our own
          planet, like Luke Skywalker on Tatooine in the iconic scene from Star Wars: A New Hope,
          theres a newly discovered planet where aliens might do so.
        </Text>
      </Box>
      <Box bg="lightgrey" />
      <Box bg="darkgrey" />
      <Box bg="darkgrey" />
      <Grid gridTemplateColumns="repeat(2, 1fr)" gridColumnGap="12px" gridRowGap="12px">
        <Box bg="darkgrey" />
        <Box bg="darkgrey" />
        <Box bg="darkgrey" />
        <Box bg="darkgrey" />
      </Grid>
      <Box bg="darkgrey" />
      <Box bg="lightgrey" />
      <Box bg="darkgrey" />
      <Box bg="darkgrey" />
    </Grid>
  </Theme>
));

stories.add('with cards', () => (
  <Theme>
    <Grid gridTemplateColumns="repeat(3, 1fr)" justifyItems="center">
      <Card variant="vertical">
        <Grid
          minHeight="200px"
          backgroundSize="cover"
          width="100%"
          backgroundPosition="center center"
          backgroundImage="url(https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        />
        <Grid p="20px" pb="32px" alignItems="start">
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
          <Grid>
            <Button justifySelf="start" mr="18px">
              {text('Label', 'First', 'Data')}
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Card variant="vertical">
        <Grid
          minHeight="200px"
          backgroundSize="cover"
          width="100%"
          backgroundPosition="center center"
          backgroundImage="url(https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        />
        <Grid p="20px" pb="32px" alignItems="start">
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
          <Grid>
            <Button mr="18px" justifySelf="stretch">
              {text('Label', 'First', 'Data')}
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Card variant="vertical">
        <Grid
          minHeight="200px"
          backgroundSize="cover"
          width="100%"
          backgroundPosition="center center"
          backgroundImage="url(https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        />
        <Grid p="20px" pb="32px" alignItems="start">
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
          <Grid>
            <Button justifySelf="end" mr="18px">
              {text('Label', 'First', 'Data')}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  </Theme>
));

stories.add('with props', () => (
  <Theme>
    <Grid
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
      bg={array('background', ['lightslategrey'], 'Core')}
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
      order={number('order', '', '{0}', 'Flexbox')}
      flexBasis={text('flexBasis', '', 'Flexbox')}
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
        {text('Text', 'Text', 'Data')}
      </Text>
    </Grid>
  </Theme>
));
