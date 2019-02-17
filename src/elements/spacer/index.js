import React from 'react';
import { height, variant } from 'styled-system';
import injectSheet, { jss } from 'react-jss';
import { merge } from 'lodash';
console.log(jss.version);
const themed = key => theme => theme[key];
const spacers = variant({ key: 'spacers' });

const tess = () => ({
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: 'blue',
  },
});

const styles = theme => ({
  spacer: props => {
    const css = {
      flex: console.log(theme, props) || '1 1 auto',
      height: '20px',
      ...height(props),
      // ...themed('Spacer')(theme),
      // ...tess(),
      // ...spacers(theme),
    };
    console.log(merge(css, themed('Spacer')(theme), spacers(theme)))
    return merge(css, spacers(theme));
  },
});

const Spacer = ({ classes }) => <div className={classes.spacer} />;

Spacer.propTypes = {
  ...height.propTypes,
};

export default injectSheet(styles)(Spacer);
