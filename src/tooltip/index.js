import React from 'react';
import styled from 'styled-components';
import Tooltip from './tooltip';
import TooltipArrow from './arrow';
import TooltipInner from './inner';
// import { Tooltip, TooltipArrow, TooltipInner } from '../';
// import { includeWith, themed, variant } from '../styled';

// const ToolTipBox = styled('div')(
//   {
//     boxSizing: 'border-box',
//   },
//   themed('Tooltip'),
//   variant('tooltips'),
//   ...includeWith('box'),
// );

export default class Tool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0,
      hidden: true,
    };
  }

  handleTooltip(ev, hidden) {
    this.setState({
      top: ev.target.offsetTop,
      left: ev.target.offsetLeft + ev.target.offsetWidth,
      hidden,
    });
  }

  render() {
    const { top, left, hidden } = this.state;
    const { children, title } = this.props;
    return (
      <div
        onMouseEnter={ev => this.handleTooltip(ev, false)}
        onMouseLeave={ev => this.handleTooltip(ev, true)}>
        <div>{children}</div>
        <Tooltip
          hidden={hidden}
          style={{
            top: `${top}px`,
            left: `${left}px`,
          }}
          right>
          <TooltipArrow right />
          <TooltipInner right>{title}</TooltipInner>
        </Tooltip>
      </div>
    );
  }
}
