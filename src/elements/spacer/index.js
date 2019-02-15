import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = (/* theme */) => ({
  // TODO theme
  spacer: props => ({
    flex: '1 1 auto',
    height: props.size || '20px',
  }),
});

class Spacer extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.spacer} />;
  }
}

Spacer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Spacer);
