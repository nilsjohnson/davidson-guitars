import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../css/app.scss';
import {getString, updateStrings, postData } from '../util/data.js';
import PwModal from '../adminComponent/PwModal.jsx';
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import UploadForm from '../adminComponent/UploadForm.jsx';
import { getCookie, setCookie } from '../util/util.js';
import LandingForm from '../adminComponent/LandingForm.jsx';

class Admin extends Component {
	constructor(props) {
		super(props);

		let isAuthenticated = getCookie("authenticated");
		let pw = getCookie("password");

		if(isAuthenticated === "true" && pw) {
			isAuthenticated = true;
		}
		else {
			isAuthenticated = false;
			pw = null;
		}

		this.state = {
			invalidPassword: false,
			password: pw,
			authenticated: isAuthenticated,
		}
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
		
	

	redirectHome = () => {
		this.props.history.push('/');
	}

	logout = () => {
		document.cookie = "authenticated=false";
		document.cookie = "password=";
		this.redirectHome();
		alert("You are now logged out. You may have to refresh to see changes.");
	}

	render() {
		if(!this.state.authenticated) {
			return ( 
				<PwModal
					setAuthenticated={this.setAuthenticated}/>
				);
		}
		else {
			// reset cookies if authenticated to not auto log out.
			setCookie("authenticated", "true", 43200);
			setCookie("password", this.state.password, 43200);
		}

		return (
			<div>
				<Header/>
				
				<div className="trans container well">
					<button className="btn btn-secondary float-right" onClick={this.logout}>Log Out</button>
				</div>

				<div className="trans container well">
					<LandingForm
						password={this.state.password}/>
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