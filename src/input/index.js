/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import elementary from '@quarkly/elementary';
import { getOmitProps } from '../utils';

const BaseInput = elementary.input({
  name: 'Input',
  variant: 'inputs',
  effects: {
    hover: ':hover',
    focus: ':focus',
    active: ':active',
  },
  omit: getOmitProps(),
});

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentWillReceiveProps(nexProps) {
    const { value } = nexProps;
    this.setState({ text: value });
  }

  componentDidMount() {
    this.setState({ text: this.props.value });
  }

  render() {
    const { onChange, value, ...other } = this.props;
    return (
      <BaseInput onChange={this.handleTextChange.bind(this)} value={this.state.text} {...other} />
    );
  }

  handleTextChange = e => {
    const { value } = e.target;
    this.setState({ text: value });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.sendTextChange(value);
    }, this.props.delay || 500);
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  sendTextChange = text => {
    this.props.onChange(text);
  };
}

Input.propTypes = BaseInput.propTypes;

export default Input;
