import React, { Component } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import Arrow from './arrow';
import Tooltip from './tooltip';

const getChildProps = ({ ref, ctx }) => ({
  onMouseEnter: event => {
    event.persist();
    ctx.handleEnter.call(ctx);
  },
  onMouseLeave: event => {
    event.persist();
    ctx.handleLeave.call(ctx);
  },
  ref,
});

export default class Elem extends Component {
  state = {
    hidden: true,
  };
  handleEnter = () => {
    this.setState({
      hidden: false,
    });
  };
  handleLeave = () => {
    this.setState({
      hidden: true,
    });
  };
  render() {
    const { props } = this;
    const { children, place = 'right', arrowColor, ...otherProps } = props;
    return (
      <Manager>
        <Reference>
          {({ ref }) => React.cloneElement(children, getChildProps({ ref, ctx: this }))}
        </Reference>
        {!this.state.hidden && (
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
                  arrowColor={arrowColor || otherProps.bg}
                  placement={placement}
                  ref={arrowProps.ref}
                  style={arrowProps.style}
                  data-placement={placement}
                />
              </Tooltip>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
}
