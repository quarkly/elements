import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant, className } from '../styled';
import { asQuark } from '../quark'

const styles = (theme) => ({
  button(props) {
    const css = {
      ...themed('Button')(theme),
      ...variant('buttons')({ theme, ...props }),
      ...includeWith('defaults', props),
      ...includeWith('card', props),
    };
    return css;
  },
})

const qStateDefault = {
  btnClick: () => {}
}

class Button extends Component {
  render() {
    const { props } = this;
    const qState = props.qState || qStateDefault;
    return (
      <button {...props} onClick={qState.btnClick.bind(null, props)} className={className('button', props)} />
    )
  }
}

export default injectSheet(styles)(asQuark(Button));
