import React, { Component } from 'react';
import '../css/app.scss';
import {getResource} from '../util/data.js';


class Services extends Component {
	constructor(props) {
		super(props);
	}

  	render() {
  		return (
  			<div
  				dangerouslySetInnerHTML={{__html: getResource("services")}}>
  			</div>
  			);
  }
}

export default Services;







