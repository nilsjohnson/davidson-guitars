import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/data.js';

class Contact extends Component {		
	render() {
		return(
			<div> 
				 <h3 className="text-center">Directions/Contact</h3>
				 <div className="row">
				 	<div className="col-xl-6">
				 	 	<strong>
					 	 	<address>
		                 		{getString("addr_1")}<br/>
		                		{getString("addr_2")}<br/>
		                		<form action="https://goo.gl/maps/DmffrAHF7zdHwhJX8" target="_blank">
								    <input type="submit" value="Map" />
								</form>
	                		</address>
	                	</strong>
				 	</div>
				 	<div className="col-xl-6">
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