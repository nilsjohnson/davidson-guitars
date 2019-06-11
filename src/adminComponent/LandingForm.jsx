import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../css/app.scss';
import {getString, postData } from '../util/data.js';
import { Link } from 'react-router-dom';


class LandingForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
			directions: getString("directions"),
			services: getString("services"),
			message: getString("message"),
			reverbSlug: getString("reverbSlug")
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
			message,
			directions,
			services,
			reverbSlug
		} = this.state;

		let strings = {
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
			message: message,
			directions: directions,
			services: services,
			reverbSlug: reverbSlug
		}

		//updateStrings(Strings, password);
		postData('/api/updateStrings', {data: strings, password: this.props.password})
			.then(function(response) {
				if(response.ok) {
					alert("Update Success!")
				}
				else {
					console.log("Update did not succeed.");
				}
			})
			.catch(err => alert(err + ": Contact Nils about this :/"));
	}

	finishUpdate = (data) => {
		alert(data.result + " Please refresh page to see updates.");
		this.redirectHome();
	}

	setAuthenticated = (password) => {
		this.setState({authenticated: true, password: password});
	}

	setError = (val) => {
		this.setState({invalidPassword: val});
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

	updateDirections = (event) => {
		this.setState({directions: event.target.value});
	}

	updateMessage = (event) => {
		this.setState({message: event.target.value});
	}

	updateServices = (event) => {
		this.setState({services: event.target.value});
	}

	updateReverbSlug = (event) => {
		this.setState({reverbSlug: event.target.value});
	}

	redirectHome = () => {
		this.props.history.push('/');
	}

	logout = () => {
		document.cookie = "authenticated=false";
		document.cookie = "password=";
		this.redirectHome();
		alert("You are now logged out.");
	}

	render() {
		return (
		<div>
			<h2 className="text-center">Edit Homepage/Basics</h2><br/>
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
	  			<label className="col-sm-3 col-form-label">Reverb "Slug":</label>
	  			<div className="col-sm-9">
	   				 <input
	   				 	defaultValue={getString("reverbSlug")}
	   				 	type="text" className="form-control" id="event-name"
	   				 	onChange={this.updateReverbSlug}/>
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
	  			<label className="col-sm-3 col-form-label">Services (html):</label>
	  			<div className="col-sm-9">
	   				 <textarea
	   				 	defaultValue={getString("services")}
	   				 	type="text" className="form-control" id="event-name"
	   				 	onChange={this.updateServices}/>
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
			</div>
		</div>	
		);
	}
}

export default LandingForm;
