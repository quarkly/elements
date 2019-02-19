import React from 'react';
import Carousel from 'nuka-carousel';
import { byProps, QSlot } from 'qslot';

// {/*{useDot ? renderBottomCenterControls={null} : null}*/

const Button = props => <button {...props}>{props.children}</button>;
export default class extends React.Component {
  render() {
    const { children, useDot } = this.props;
    return (
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <QSlot
            select={byProps('controls', 'left')}
            onClick={previousSlide}
            content={children}
            to={Button}
            once
          />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <QSlot
            select={byProps('controls', 'right')}
            onClick={nextSlide}
            content={children}
            to={Button}
            once
          />
        )}>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}
