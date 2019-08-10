import React, { Component } from 'react';
import styled from 'styled-components';
import elementary from '@quarkly/elementary';
import cn from 'classnames';
import { getOmitProps } from '../utils';

const ENAME = 'tabs';

const TAB = 'tabs';
const TABNAV = 'tabnav';

const TabContainer = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
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

const Styled = elementary.div({
  name: 'Tabs',
  variant: 'tabs',
  effects: {
    hover: ':hover',
  },
  omit: getOmitProps(),
  normalize: true,
});

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
  componentWillReceiveProps(newProps, oldProps) {
    if (newProps === oldProps) return;
    const [tabNav] = findTabsNav(newProps.children);
    if (!tabNav.props || !tabNav.props.children) return;
    const childLen = tabNav.props.children.length - 1;
    if (this.state.activeTabIndex > childLen) {
      this.setState({
        activeTabIndex: 0,
      });
    }
  }
  render() {
    const { children, lazy } = this.props;
    const [tabs] = findTabs(children);
    const [tabNav] = findTabsNav(children);
    if (!tabs || !tabNav) {
      return null;
    }
    let validIdNav = -1;
    let validIdTab = -1;
    return (
      <Styled {...this.props}>
        {React.cloneElement(tabNav, {
          children: React.Children.map(tabNav.props.children, child => {
            if (!child) return;
            validIdNav += 1;
            return React.cloneElement(child, {
              key: uid(validIdNav),
              onClick: () => this.handleTabClick(validIdNav),
              active: validIdNav === this.state.activeTabIndex,
              HtmlActive: 'active',
              htmlActive: 'active',
              className: cn(
                { active: validIdNav === this.state.activeTabIndex },
                child.props.className,
              ),
            });
          }),
        })}
        {React.cloneElement(tabs, {
          children: React.Children.map(tabs.props.children, tab => {
            if (!tab) return;
            validIdTab += 1;
            return (
              <TabContainer
                isActive={validIdTab === this.state.activeTabIndex}
                key={uid(validIdTab)}>
                {!lazy || validIdTab === this.state.activeTabIndex
                  ? React.cloneElement(tab, {
                      children: tab.props.children,
                    })
                  : null}
              </TabContainer>
            );
          }),
        })}
      </Styled>
    );
  }
}
