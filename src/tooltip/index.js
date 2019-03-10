import React, { Component } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import Arrow from './arrow';
import Tooltip from './tooltip';
// import { Tooltip, TooltipArrow, TooltipInner } from '../';
// import { includeWith, themed, variant } from '../styled';

const getChildProps = ({ ref }) => ({
  ref,
});

export default class Elem extends Component {
  onRootRef = ref => {
    this.childrenRef = ref;
  };

  render() {
    const { props } = this;
    const { children, place = 'right', ...otherProps } = props;
    return (
      <Manager>
        <Reference>{({ ref }) => React.cloneElement(children, getChildProps({ ref }))}</Reference>
        <Popper placement={place}>
          {({ ref, style, placement, arrowProps }) => (
            <Tooltip
              {...otherProps}
              placement={placement}
              ref={ref}
              style={style}
              data-placement={placement}>
              {props.title}
              <Arrow
                {...otherProps}
                placement={placement}
                ref={arrowProps.ref}
                style={arrowProps.style}
                data-placement={placement}
              />
            </Tooltip>
          )}
        </Popper>
      </Manager>
    );
  }
}
