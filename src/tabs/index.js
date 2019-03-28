import React, { Component } from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';
import Box from '../box';
import Flex from '../flex';
// display: flex;
//     justify-content: space-between;
const ENAME = 'tabs';

const TAB = 'tab';
const TABNAV = 'tabnav';

const TabContainer = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
`;

const TabNavContainer = styled.div`
  color: ${props => (props.isActive ? 'red' : 'inherit')};
  padding: 4px;
  display: flex;
  margin: 0;
`;

const uid = i => `${i}-${ENAME}`;

const findByRole = (children, role) => {
  const targets = [];
  React.Children.forEach(children, child => {
    if (child.props && child.props.role === role) {
      targets.push(child);
    }
  });
  return targets;
};

const findTabs = children => {
  return findByRole(children, TAB);
};

const findTabsNav = children => {
  return findByRole(children, TABNAV);
};

const pickWithoutTabsNav = children => {
  const targets = [];
  React.Children.forEach(children, child => {
    if (child.props && child.props.role === TABNAV) {
      return;
    }
    targets.push(child);
  });
  return targets;
};

const Styled = styled('div')(
  {
    boxSizing: 'border-box',
  },
  themed('Tabs'),
  variant('tabs'),
  ...includeWith('defaults'),
);

export default class TabClass extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex || 0,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }
  // на обновление пропосов сбрасывать табиндекс
  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex,
    });
  }

  render() {
    const { children } = this.props;
    const tabs = findTabs(children);

    if (!tabs.length) {
      return null;
    }
    const tabsNav = tabs.reduce((acc, tab) => {
      const tabNav = findTabsNav(tab.props.children);
      acc.push(tabNav);
      return acc;
    }, []);

    return (
      <Styled {...this.props}>
        <Flex>
          {tabsNav.map((nav, i) => (
            <TabNavContainer
              isActive={i === this.state.activeTabIndex}
              key={uid(i)}
              onClick={() => this.handleTabClick(i)}>
              {nav}
            </TabNavContainer>
          ))}
        </Flex>
        <Box display="flex">
          {tabs.map((tab, i) => (
            <TabContainer isActive={i === this.state.activeTabIndex} key={uid(i)}>
              {React.cloneElement(tab, {
                children: pickWithoutTabsNav(tab.props.children),
              })}
            </TabContainer>
          ))}
        </Box>
      </Styled>
    );
  }
}
