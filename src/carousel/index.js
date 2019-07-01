import React from 'react';
import Slider from 'react-slick';
import elementary from '@quarkly/elementary';
import { Provider } from '../quark';
import { getOmitProps } from '../utils';

class CarouselBase extends React.PureComponent {
  render() {
    const { children, className } = this.props;
    return (
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
        <Slider ref={slider => (this.slider = slider)} arrows={false} className={className}>
          {children}
        </Slider>
      </Provider>
    );
  }
}

const Carousel = elementary(CarouselBase)({
  effects: { hover: ':hover' },
  name: 'Carousel',
  variant: 'carousels',
  omit: getOmitProps(),
  normalize: true,
});

export default Carousel;
