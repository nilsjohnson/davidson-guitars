import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/strings.js';


class Services extends Component {
	constructor(props) {
		super(props);
	}

  	render() {
  		return (
  			<div
  				dangerouslySetInnerHTML={{__html: getString("services")}}>
  			</div>
  			);
  }
}

export default Services;







