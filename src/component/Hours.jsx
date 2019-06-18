import React, { Component } from 'react';
import '../css/app.scss';
import {getResource} from '../util/data.js';

class Hours extends Component {		
	render() {
		return(
			<div> 
			 	<h3 className="text-center">Hours</h3>
				{getResource("hours").map(item => <h5 key={item}>{item}</h5>)}
				<hr/>
			</div>); 
	}
}

export default Hours;