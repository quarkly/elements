import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant, className } from '../styled';

const styles = theme => ({
  image: props => {
    return {
      ...themed('Image')(theme),
      ...variant('images')({ theme, ...props }),
      ...includeWith('defaults', props),
      ...includeWith('image', props),
    };
  },
});

const Image = props => <img {...props} className={className('image', props)} />;

// Spacer.propTypes = {
//   ...height.propTypes,
// };

export default injectSheet(styles)(Image);
