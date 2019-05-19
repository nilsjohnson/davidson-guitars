import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../strings.js';


class Facebook extends Component {
	constructor(props) {
		super(props);
	}

  	render() {
	    

  		return (

  			<div>
  				<h4 className="text-center">Check Out Facebook Page</h4>
  				<div className="fb-page" data-href="https://www.facebook.com/Owen-Davidson-Guitars-377474536174240/" data-tabs="" data-width="400" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Owen-Davidson-Guitars-377474536174240/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Owen-Davidson-Guitars-377474536174240/">Owen Davidson Guitars</a></blockquote></div>
  			</div>
  			);
  }
}

export default Facebook;