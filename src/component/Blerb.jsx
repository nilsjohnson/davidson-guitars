import React, { Component } from 'react';
import '../css/app.scss';
import {getResource} from '../util/data.js';

class Blerb extends Component {		
	render() {
		return(
			<div>
			<h3 className="text-center">{getResource("header")}</h3>
                <p dangerouslySetInnerHTML={{__html: getResource("description")}}>
                </p>
                <hr/>
            </div>); 
	}
}

export default Blerb;        

     