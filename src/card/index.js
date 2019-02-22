import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant, className } from '../helper';

const styles = (theme) => ({
  card(props) {
    const css = {
      ...themed('Card')(theme),
      ...variant('cards')({ theme, ...props }),
      ...includeWith('defaults', props),
      ...includeWith('card', props),
    };
    return css;
  },
})

const Card = (props) => <div className={className('card', props)} />

export default injectSheet(styles)(Card);
