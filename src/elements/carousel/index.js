import React from 'react';
import Slider from "react-slick";
import injectSheet from 'react-jss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { includeWith, themed, variant, className } from '../helper';

const styles = (theme) => ({
  carousel(props) {
    const css = {
      ...themed('Carousel')(theme),
      ...variant('carousels')({ theme, ...props }),
      ...includeWith('defaults', props),
      '&:hover': {
        ...includeWith('hovered', props)
      }
    };
    return css;
  },
})

class Carousel extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Slider {...this.props} className={className('carousel', this.props)}>
        {children}
      </Slider>
    );
  }
}

export default injectSheet(styles)(Carousel);