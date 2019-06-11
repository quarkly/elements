import React, { Component } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import Arrow from './arrow';
import Tool from './tooltip';

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

class Tooltip extends Component {
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
    const { children, place = 'right', ...otherProps } = props;
    return children ? (
      <Manager>
        <Reference>
          {({ ref }) => React.cloneElement(children, getChildProps({ ref, ctx: this }))}
        </Reference>
        {!this.state.hidden && (
          <Popper placement={place}>
            {({ ref, style, placement, arrowProps }) => (
              <Tool
                {...otherProps}
                placement={placement}
                ref={ref}
                style={style}
                data-placement={placement}>
                {props.title}
                <Arrow
                  color={otherProps.bg || otherProps.bgc}
                  placement={placement}
                  ref={arrowProps.ref}
                  style={arrowProps.style}
                  data-placement={placement}
                />
              </Tool>
            )}
          </Popper>
        )}
      </Manager>
    ) : (
      ''
    );
  }
}

Tooltip.propTypes = Tool.propTypes;

export default Tooltip;
