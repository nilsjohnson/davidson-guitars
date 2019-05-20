import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/strings.js';

class Hours extends Component {		
	render() {
		return(
			<div> 
			 	<h3 className="text-center">Hours</h3>
				{getString("hours").map(item => <h5 key={item}>{item}</h5>)}
				<hr/>
			</div>); 
	}
}

export default Hours;