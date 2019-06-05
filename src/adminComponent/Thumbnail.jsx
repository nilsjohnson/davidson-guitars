import React, { Component } from 'react';
import '../css/app.scss';
import { getString, deleteData} from '../util/data.js';

class Thumbnail extends Component {
    delete = (event) => {
        deleteData('/api/carouselImgDelete', { data: this.props.addr })
            .then(response => response.json())
            .then(response => this.doDelete(response.result))
            .catch(err => console.log(err));
    }

    doDelete = (result) => {
        if(result === "Delete Success!"){
            this.props.remove(this.props.addr);
        }
    }

	render() {
		return(
			<div className="col-lg-3 col-md-4 col-sm-6">
    			<img className="img-fluid img-thumbnail" src={this.props.addr}/>
    			<button type="button" onClick={this.delete} className="btn btn-primary btn-lg btn-block">Delete</button>
    			<button type="button" className="btn btn-secondary btn-lg btn-block">Left</button>
    			<button type="button" className="btn btn-secondary btn-lg btn-block">Right</button>
    		</div>     
            ); 
	}
}

export default Thumbnail;   