import React, { Component } from 'react';
import '../css/app.scss';
import { postData } from '../util/data.js';
import { setCookie } from '../util/util.js';

class PwModal extends Component {	
	constructor(props) {
		super(props);

		this.state = {
			password: null,
			error: false
		}

		this.inputRef = React.createRef();
	}

	setPw = (event) => {
		this.inputRef.current.classList.remove("error");
		this.setState({password: event.target.value});
	}

	setAuthenticated = (val) => {
		if(val === true) {
			this.props.setAuthenticated(this.state.password);
			setCookie("authenticated", "true", 43200);
			setCookie("password", this.state.password, 43200);

		}
		else {
			console.log("value: " + val);
			this.inputRef.current.classList.add("error");
		}
	}

	authenticate = (event) => {
		event.preventDefault();
		
		let callback = this.setAuthenticated;
		postData('/api/authenticate', {password: this.state.password})
			.then(function(response){
				if(response.ok) {
					callback(true);
				}
				else {
					callback(false);
				}
			})
			.catch(error => console.log(error));

	}

	render() {
		return (
	        <div className="container">
                <div id="login-box" className="">
                    <form className="trans well form">
                        <h3 className="text-center">Login</h3>
                        <div className="form-group">
                            <label>Password:</label><br/>
                            <input type="password" ref={this.inputRef} id="pw-input" className="form-control" onChange={this.setPw}/>
                        </div>
                        <div className= "text-center mx-auto">
    						<button className="btn btn-primary mr-1" 
    							onClick={this.authenticate}
    						>Login</button>
    						<button className="btn btn-secondary">Cancel</button>
						</div>
                    </form>
                </div>
            </div>   
		);
	}
}

export default PwModal;                

