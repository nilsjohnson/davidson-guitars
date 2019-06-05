import React, { Component } from 'react';
import '../css/app.scss';
import Carousel from 'react-bootstrap/Carousel';

class MyCarousel extends Component {
  render() {
    return (
    	<Carousel>
    		{this.props.images.map(item => <Carousel.Item key={item}>
    			<img
	      			key={item}
	      			src={item}
	      			className="d-inline w-100"
	      			/>
    			</Carousel.Item>)
    		}
    	</Carousel>
      );
  }
}

export default MyCarousel;
