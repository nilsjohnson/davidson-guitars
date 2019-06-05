import React, { Component } from 'react';
import '../css/app.scss';
import { getCarouselImages, uploadFile } from '../util/data.js';
import Thumbnail from './Thumbnail.jsx';

class UploadForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			thumbnails: []
		}

		let callback = this.addThumbnails;
    	getCarouselImages().then(function(response){
        if(response.ok) {
            response.json().then(data => { 
              callback(data);
          });
        }
        else {
          console.log("problem fetching carousel images");
        } 
      });
	}

	addThumbnails = (addrs) => {
		for(let i = 0; i < addrs.length; i++) {
			this.addThumbnail(addrs[i]);
		}
	}
	
	addThumbnail = (addr) => {
		this.setState({
			thumbnails: [...this.state.thumbnails, addr]
		});
	}

	removeThumnail = (addr) => {
		let i = 0;
		while(i < this.state.thumbnails.length) {
			if(addr === this.state.thumbnails[i])
			{
				break;
			}
			else {
				i++;
			}
		}

		this.setState({
			thumbnails: this.state.thumbnails.splice(i, 1)
		});
	}

	upload = () => {
		var photos = document.querySelector('input[type="file"][multiple]');

		// uploads each individual file
		for (var i = 0; i < photos.files.length; i++) {
			var formData = new FormData();
		  	formData.append('photo', photos.files[i]);

		  	uploadFile('/api/carouselUpload', formData)
		  		.then(function(response){
		  			console.log(response);
		  			response.json();
		  		})
				.then(response => this.addThumbnail(response.address))
				.catch(error => console.error('Error:', error));
		}
	}

	delete = (event) => {
		
	}	

	render() {
		return(
			 <div>
			 	<div className="row">
			 		{this.state.thumbnails.map(item => <Thumbnail
      					key={item}
      					addr={item}
      					remove={this.removeThumnail}/>)
      				}
			 	</div>
				 <div> 
				    <input type="file" multiple />
				    <button onClick={this.upload}>Upload</button>
	    		</div>
    		</div>     
            ); 
	}
}

export default UploadForm;    