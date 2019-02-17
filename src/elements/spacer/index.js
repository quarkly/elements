import React from 'react';
import { height, variant } from 'styled-system';
import injectSheet from 'react-jss';

const themed = key => theme => theme[key];
const spacers = variant({ key: 'spacers' });

const styles = theme => ({
  spacer: props => {
    return {
      flex: '1 1 auto',
      height: '20px',
      ...themed('Spacer')(theme),
      ...spacers({ theme, ...props }),
      ...height(props),
    };
  },
});

const Spacer = ({ classes }) => <div className={classes.spacer} />;

Spacer.propTypes = {
  ...height.propTypes,
};

export default injectSheet(styles)(Spacer);
