import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant, className } from '../helper';

const styles = theme => ({
  spacer: props => {
    return {
      flex: '1 1 auto',
      height: '20px',
      ...themed('Spacer')(theme),
      ...variant('spacers')({ theme, ...props }),
      ...includeWith('defaults', props),
    };
  },
});

const Spacer = ({ classes }) => <div className={className('spacer', props)} />;

// Spacer.propTypes = {
//   ...height.propTypes,
// };

export default injectSheet(styles)(Spacer);
