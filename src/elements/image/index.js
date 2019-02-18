import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant } from '../helper';

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

const Image = props => <img {...props} className={props.classes.image} />;

// Spacer.propTypes = {
//   ...height.propTypes,
// };

export default injectSheet(styles)(Image);
