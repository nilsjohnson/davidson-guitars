import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/data.js';

class Blerb extends Component {		
	render() {
		return(
			<div>
			<h3 className="text-center">{getString("header")}</h3>
                <p dangerouslySetInnerHTML={{__html: getString("description")}}>
                </p>
                <hr/>
            </div>); 
	}
}

export default Blerb;        

     