import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/strings.js';

class UploadForm extends Component {

	upload = () => {
		var photos = document.querySelector('input[type="file"][multiple]');

		for (var i = 0; i < photos.files.length; i++) {
			var formData = new FormData();
		  	formData.append('photo', photos.files[i]);
		  	fetch('/carouselUpload', {
		  		method: 'POST',
		  		body: formData
			})
			.then(response => response.json())
			.then(response => console.log('Success:', JSON.stringify(response)))
			.catch(error => console.error('Error:', error));
		}

	}		
	render() {
		return(
			 <div> 
			    <input type="file" multiple />
			    <button onClick={this.upload}>Upload</button>
    		</div>     
            ); 
	}
}

export default UploadForm;    