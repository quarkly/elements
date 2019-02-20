import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant } from '../helper';

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

const Card = ({ classes }) => <div className={classes.card} />;

// Spacer.propTypes = {
//   ...height.propTypes,
// };

export default injectSheet(styles)(Card);
