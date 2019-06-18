import React, { Component } from 'react';
import '../css/app.scss';
import {getResource} from '../util/data.js';

class Contact extends Component {		
	render() {
		return(
			<div> 
				 <h3 className="text-center">Directions/Contact</h3>
				 <div className="row">
				 	<div className="col-xl-6">
				 	 	<strong>
					 	 	<address>
		                 		{getResource("addr_1")}<br/>
		                		{getResource("addr_2")}<br/>
		                		<form action="https://goo.gl/maps/DmffrAHF7zdHwhJX8" target="_blank">
								    <input type="submit" value="Map" />
								</form>
	                		</address>
	                	</strong>
				 	</div>
				 	<div className="col-xl-6">
				 		<strong>
					 		<address>
	                  			<a href="mailto:owen@davidsonguitars.com">{getResource("email")}</a><br/> 
	                  			{getResource("phoneNum")}<br/>
	                		</address>
                		</strong>
				 	</div>
				
                </div>
                <p>
                	{getResource("directions")}
                </p>
			</div>); 
	}
}

export default Contact;