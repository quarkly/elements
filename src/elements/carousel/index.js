import React from 'react';
import Slider from "react-slick";
import injectSheet from 'react-jss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { includeWith, themed, variant, className } from '../helper';
import { Provider } from '../quark'

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
      <Provider value={{
        btnClick: (prop) => {
          console.log(prop)
          this.slider.slickNext();
        }
      }}>
        <Slider ref={slider => this.slider = slider} {...this.props} className={className('carousel', this.props)}>
          {children}
        </Slider>
      </Provider>
    );
  }
}

export default injectSheet(styles)(Carousel);