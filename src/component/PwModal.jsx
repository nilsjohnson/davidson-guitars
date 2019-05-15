import React, { Component } from 'react';
import '../css/app.scss';

class PwModal extends Component {		
	render() {
		return (
			
		<div id="login">
	        <div className="container">
	            <div id="login-row" className="row justify-content-center align-items-center">
	                <div id="login-column" className="col-md-6">
	                    <div id="login-box" className="col-md-12">
	                        <form id="login-form" className="form">
	                            <h3 className="text-center">Login</h3>
	                            <div className="form-group">
	                                <label>Password:</label><br/>
	                                <input className="form-control" onChange={this.props.setPw}/>
	                            </div>
	                            
	                            <div className= "text-center mx-auto">
            						<button className="btn btn-primary mr-1" onClick={this.props.authenticate}>Login</button>
            						<button className="btn btn-secondary">Cancel</button>
								</div>
	                            
	                        </form>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>    
		);
	}
}

export default PwModal;                

