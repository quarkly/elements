import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant, className } from '../styled';

const styles = theme => ({
  text(props) {
    const css = {
      ...themed('Text')(theme),
      ...variant('texts')({ theme, ...props }),
      ...includeWith('defaults', props),
      ...includeWith('card', props),
    };
    return css;
  },
});

const Text = props => <p className={className('text', props)}>{props.children}</p>;

export default injectSheet(styles)(Text);
