import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/strings.js';

class Contact extends Component {		
	render() {
		return(
			<div> 
				 <h3 className="text-center">Directions/Contact</h3>
				 <div className="row">
				 	<div className="col-6">
				 	 	<strong>
					 	 	<address>
					 	 		<a href="https://goo.gl/maps/DmffrAHF7zdHwhJX8" target="_blank">
		                 			{getString("addr_1")}<br/>
		                			{getString("addr_2")}<br/>
		                		</a>
	                		</address>
	                	</strong>
				 	</div>
				 	<div className="col-6">
				 		<strong>
					 		<address>
	                  			<a href="mailto:owen@davidsonguitars.com">{getString("email")}</a><br/> 
	                  			{getString("phoneNum")}<br/>
	                		</address>
                		</strong>
				 	</div>
				
                </div>
                <p>
                	{getString("directions")}
                </p>
			</div>); 
	}
}

export default Contact;