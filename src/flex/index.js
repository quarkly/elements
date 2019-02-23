import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant, className } from '../styled';

const styles = theme => ({
  flex(props) {
    const css = {
      display: 'flex',
      ...themed('Flex')(theme),
      ...variant('flexs')({ theme, ...props }),
      ...includeWith('defaults', props),
      ...includeWith('flex', props),
    };
    return css;
  },
});

const Card = props => <div className={className('flex', props)}>{props.children}</div>;

export default injectSheet(styles)(Card);
