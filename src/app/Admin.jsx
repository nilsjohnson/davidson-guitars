import React, { Component } from 'react';
import '../css/app.scss';
import {getString, updateStrings, postData } from '../Strings';
import PwModal from '../component/PwModal.jsx';
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
			authenticated: false,
			name: getString("name"),
			header: getString("header"),
			description: getString("description"),
			hours: getString("hours"),
			email: getString("email"),
			phoneNum: getString("phoneNum"),
			addr_1: getString("addr_1"),
			addr_2: getString("addr_2"),
			footer: getString("footer"),
			reverbHeader: getString("reverbHeader"),
			reverbDescription: getString("reverbDescription"),
			directions: getString("directions"),
			message: getString("message")
		}
	}

	submitUpdate = () => {
		const {
			name,
			header,
			description,
			hours,
			email,
			phoneNum,
			addr_1,
			addr_2,
			footer,
			reverbHeader,
			reverbDescription,
			message,
			directions
		} = this.state;

		let Strings = {
			name: name,
			header: header,
			description: description,
			hours: hours,
			email: email,
			phoneNum: phoneNum,
			addr_1: addr_1,
			addr_2: addr_2,
			footer: footer,
			reverbHeader: reverbHeader,
			reverbDescription: reverbDescription,
			message: message,
			directions: directions
		}

		updateStrings(Strings);
	}

	nothing = (event) => {
		event.preventDefault();
		
		postData('/api/authenticate', {password: this.state.password})
  			.then(data => this.setAuthenticated(data.status)) // JSON-string from `response.json()` call
  			.catch(error => console.error(error));
	}

	setAuthenticated = (value) => {
		if(value === "true") {
			this.setState({authenticated: true})
		}
	}

	setPassword = (event) => {
	
		this.setState({password: event.target.value});
	
	}
		
	updateName = (event) => {
		this.setState({name: event.target.value});
		console.log("updated name");
	}

	updateHeader = (event) => {
		this.setState({header: event.target.value});
		console.log("updated header");
	}

	updateDesription = (event) => {
		this.setState({description: event.target.value});
		console.log("updated desc");
	}

	updateHours = (event) => {
		this.setState({hours: event.target.value.split("\n")});
	}

	updateEmail = (event) => {
		this.setState({email: event.target.value});
	}

	updatePhoneNum = (event) => {
		this.setState({phoneNum: event.target.value});
	}

	updateAddr_1 = (event) => {
		this.setState({addr_1: event.target.value});
	}

	updateAddr_2 = (event) => {
		this.setState({addr_2: event.target.value});
	}

	updateFooter = (event) => {
		this.setState({footer: event.target.value});;
	}

	updateReverbHeader = (event) => {
		this.setState({reverbHeader: event.target.value});
	}

	updateReverbDesc = (event) => {
		this.setState({reverbDescription: event.target.value});
	}

	updateDirections = (event) => {
		this.setState({directions: event.target.value});
	}

	updateMessage = (event) => {
		this.setState({message: event.target.value});
	}



	render() {
		if(!this.state.authenticated) {
			return ( 
				<PwModal
					authenticate={this.nothing}
					setPw={this.setPassword}/>
				);
		}

		return (
			<div>
				<Header/>
				<Navbar/>
				<br/>
				<div className="trans container">
					<br/>
					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Name:</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("name")}
	           				 	onChange={this.updateName}
	           				 	type="text" className="form-control" id="event-name"/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Landing Header:</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("header")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateHeader}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Landing Description:</label>
	          			<div className="col-sm-9">
	           				 <textarea
	           				 	defaultValue={getString("description")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateDesription}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Hours</label>
	          			<div className="col-sm-9">
	           				 <textarea
	           				 	defaultValue={getString("hours").toString().replace(/,/g, "\n")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateHours}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Phone Number:</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("phoneNum")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updatePhoneNum}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Address Line 1:</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("addr_1")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateAddr_1}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Address Line 2:</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("addr_2")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateAddr_2}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Footer:</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("footer")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateFooter}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Reverb Header</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("reverbHeader")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateReverbHeader}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Reverb Description:</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("reverbDescription")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateReverbDesc}/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Directions:</label>
	          			<div className="col-sm-9">
	           				<input
	           				 	defaultValue={getString("directions")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateDirections}
	           				/>
	          			</div>
					</div>

					<div className="form-group row">
	          			<label className="col-sm-3 col-form-label">Message:</label>
	          			<div className="col-sm-9">
	           				<input
	           				 	defaultValue={getString("message")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateMessage}
	           				/>
	          			</div>
					</div>

					<div className= "text-center mx-auto">
	            		<button className="btn btn-primary mr-1" onClick={this.submitUpdate}>Update</button>
	            		<button className="btn btn-secondary">Cancel</button>
					</div>
					<br/>
				</div>
			</div>
		);
	}
}

export default Admin;