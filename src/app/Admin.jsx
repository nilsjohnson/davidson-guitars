import React, { Component } from 'react';
import '../css/app.scss';



class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false
		}
	this.authenticate = this.authenticate.bind(this);

	}

	authenticate(e) {
    	console.log("click");
	}


	render() {
		return (
			<div className="container">
				<label> Password:</label>
				<input type="password" id="pw-input"/>
				<button type="button" className="btn btn-primary" onClick={this.authenticate}>Login</button>
			</div>
		);
	}
}

export default Admin;