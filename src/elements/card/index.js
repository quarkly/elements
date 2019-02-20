import React from 'react';
import injectSheet from 'react-jss';
import { includeWith, themed, variant } from '../helper';

const styles = ({theme}) => ({
  card(props) {
    console.log(includeWith('defaults', props))
    const css = {
      // width: '300px',
      // height: '400px',
      // backgroundColor: 'red',
      ...includeWith('defaults', props),
    };
    console.log(css['@media screen and (min-width: 40em)'])
    return css;
  },
})

const Card = ({ classes }) => <div className={classes.card} />;

// Spacer.propTypes = {
//   ...height.propTypes,
// };

export default injectSheet(styles)(Card);
