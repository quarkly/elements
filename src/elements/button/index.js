import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant, className } from '../helper';

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

const Button = (props) => <button {...props} className={className('button', props)} />

export default injectSheet(styles)(Button);
