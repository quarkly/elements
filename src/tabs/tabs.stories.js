/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Tabs from './index';
import Theme from '../storyModules/theme';
import Text from '../text';
import Box from '../box';
import Block from '../block';
import Button from '../button';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

const MyTabs = props => (
  <Tabs {...props}>
    <Box role="tabnav" variant="tabnav">
      <Button variant="tab" activeColor="white" activeBorderBottom="2px solid white">
        Основное
      </Button>
      <Button variant="tab" activeColor="white" activeBorderBottom="2px solid white">
        Лэйаут
      </Button>
      <Button variant="tab" activeColor="white" activeBorderBottom="2px solid white">
        Отступы
      </Button>
      <Button variant="tab" activeColor="white" activeBorderBottom="2px solid white">
        Flex
      </Button>
      <Button variant="tab" activeColor="white" activeBorderBottom="2px solid white">
        Grid
      </Button>
      <Button variant="tab" activeColor="white" activeBorderBottom="2px solid white">
        Фон
      </Button>
      <Button variant="tab" activeColor="white" activeBorderBottom="2px solid white">
        Разное
      </Button>
      <Button variant="tab" activeColor="white" activeBorderBottom="2px solid white">
        Позиция
      </Button>
    </Box>
    <Box role="tabs" variant="tabcontent">
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Text color="white" variant="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Text color="white" variant="base">
          Содержимое категории Лэйаут
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Text color="white" variant="base">
          Содержимое категории Отступы
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Text color="white" variant="base">
          Содержимое категории Flex
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Text color="white" variant="base">
          Содержимое категории Grid
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Text color="white" variant="base">
          Содержимое категории Фон
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Text color="white" variant="base">
          Содержимое категории Разное
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Text color="white" variant="base">
          Содержимое категории Позиция
        </Text>
      </Box>
    </Box>
  </Tabs>
);

stories.add('constructor', () => (
  <Block bg="#252526">
    <Theme name="constructor">
      <MyTabs />
    </Theme>
  </Block>
));

stories.add('constructor lazy', () => (
  <Block bg="#252526">
    <Theme name="constructor">
      <MyTabs lazy />
    </Theme>
  </Block>
));
const interate = (i, fn) => {
  const res = [];
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < i; j++) {
    res.push(fn(j));
  }
  return res;
};
class TabNavTestBox extends React.Component {
  state = {
    controls: 5,
  };
  render() {
    setTimeout(() => {
      this.setState({
        controls: 3,
      });
    }, 1000);
    return (
      <Block bg="#252526">
        <Theme name="constructor">
          <Tabs>
            <Box role="tabnav" variant="tabnav">
              {interate(this.state.controls, i => (
                <Button
                  key={i}
                  variant="tab"
                  activeColor="white"
                  activeBorderBottom="2px solid white">
                  Лэйаут {i}
                </Button>
              ))}
            </Box>
            <Box role="tabs" variant="tabcontent">
              <Box display="flex" flexDirection="column" justifyContent="center">
                <Text color="white" variant="h1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </Box>
              <Box display="flex" justifyContent="center">
                <Text color="white" variant="base">
                  Содержимое категории Лэйаут
                </Text>
              </Box>
            </Box>
          </Tabs>
        </Theme>
      </Block>
    );
  }
}

stories.add('tabidex reset', () => <TabNavTestBox />);
