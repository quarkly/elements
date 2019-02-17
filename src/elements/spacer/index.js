import React from 'react';
import injectSheet from 'react-jss';
import { withDefault, themed, variant } from '../helper';

const styles = theme => ({
  spacer: props => {
    return {
      flex: '1 1 auto',
      height: '20px',
      ...themed('Spacer')(theme),
      ...variant('spacers')({ theme, ...props }),
      ...withDefault(props),
    };
  },
});

const Spacer = ({ classes }) => <div className={classes.spacer} />;

// Spacer.propTypes = {
//   ...height.propTypes,
// };

export default injectSheet(styles)(Spacer);
