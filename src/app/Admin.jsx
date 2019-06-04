import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../css/app.scss';
import {getString, updateStrings, postData } from '../util/strings';
import PwModal from '../adminComponent/PwModal.jsx';
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import UploadForm from '../adminComponent/UploadForm.jsx';

class Admin extends Component {
	constructor(props) {
		super(props);

		// check if authenticated
		let isAuthenticated = false;
		if (document.cookie.split(';').filter(function(item) {
			return item.indexOf('authenticated=true') >= 0
		}).length) {
			isAuthenticated = true;
		}


		this.state = {
			invalidPassword: false,
			password: "",
			authenticated: isAuthenticated,
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
			directions,
			services,
			reverbLink
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
			reverbDescription: reverbDescription,
			message: message,
			directions: directions,
			services: services,
			reverbLink: reverbLink
		}

		//updateStrings(Strings, password);
		postData('/api/updateStrings', {data: strings, password: this.state.password})
			.then(data => this.finishUpdate(data))
			.catch(err => alert(err));
	}

	finishUpdate = (data) => {
		alert(data.result);
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

	updateReverbLink = (event) => {
		this.setState({reverbLink: event.target.value});
	}

	redirectHome = () => {
		this.props.history.push('/');
	}

	logout = () => {
		document.cookie = "authenticated=false";
		this.redirectHome();
		alert("You are now logged out.");
	}

	render() {
		if(!this.state.authenticated) {
			return ( 
				<PwModal
					setAuthenticated={this.setAuthenticated}/>
				);
		}

		return (
			<div>
				<Header/>
				
				<div className="trans container well">
					<button className="btn btn-secondary float-right" onClick={this.logout}>Log Out</button>
				</div>
				<div className="trans container well">
					<h2 className="text-center">Edit Homepage</h2><br/>
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
	          			<label className="col-sm-3 col-form-label">Reverb Link:</label>
	          			<div className="col-sm-9">
	           				 <input
	           				 	defaultValue={getString("reverbLink")}
	           				 	type="text" className="form-control" id="event-name"
	           				 	onChange={this.updateReverbLink}/>
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
	            		<button className="btn btn-secondary" onClick={this.redirectHome}>Cancel</button>
					</div>
					<br/>
				</div>

				<div className="trans container well">
					<h2 className="text-center">Edit Carousel Images</h2>
					<UploadForm/>
				</div>	
			</div>
		);
	}
}

export default Admin;