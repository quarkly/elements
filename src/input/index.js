/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import styled from 'styled-components';
import { includeWith, themed, variant } from '../styled';

const BaseInput = styled('input')(
  {
    boxSizing: 'border-box',
    backgroundColor: '#353535',
    height: '23px',
    color: '#cccccc',
    paddingLeft: '12px',
    paddingTop: '0px',
    paddingRight: '12px',
    paddingBottom: '2px',
    outline: 'none',
    lineHeight: '15px',
    border: '1px solid transparent',
    '&:hover': {
      border: '1px solid #555',
    },
    '&:focus': {
      border: '1px solid #29B6F6',
    },
  },
  themed('Input'),
  variant('inputs'),
  ...includeWith('defaults'),
  ...includeWith('hovered'),
);

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
      <BaseInput
        as="input"
        onChange={this.handleTextChange.bind(this)}
        value={this.state.text}
        {...other}
      />
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

export default Input;
