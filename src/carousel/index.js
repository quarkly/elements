import React from 'react';
import Slider from 'react-slick';
import { Provider } from '../quark';
import Box from '../box';

class Carousel extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Box>
        <Provider
          value={{
            btnClick: prop => {
              if (!prop || !prop.controls) {
                return;
              }
              if (prop.controls === 'left') {
                this.slider.slickPrev();
              }
              if (prop.controls === 'right') {
                this.slider.slickNext();
              }
            },
          }}>
          <Box {...this.props}>
            <Slider ref={slider => (this.slider = slider)} arrows={false} {...this.props}>
              {children}
            </Slider>
          </Box>
        </Provider>
      </Box>
    );
  }
}

Carousel.propTypes = Box.propTypes;

export default Carousel;
