import React, { Component } from 'react';
import '../../css/app.scss';
import { Link } from 'react-router-dom';
import {toReadable } from '../../util/util.js';


class BlogHeader extends Component {
 	getImage = () => {
    console.log(this.props.post);
    if(typeof this.props.post.images === "undefined"){
      return "";
    }
    else if(this.props.post.images[0].url){
      return this.props.post.images[0].url;
    }
    else {
      return "";
    }
  }
  render() {
    	return (
        	<div className="container trans well">
        		<div className="row">
        			<div className="col-md-4">
                <img src={this.getImage()} className="img-fluid img-thumbnail"/>
        			</div>
        			<div className="col-md-8">
                <div className="">
    	      			<Link to={{
    	      				 pathname: '/blog',
    	      				 search: '?post=' + this.props.post.id
    	    			    }}><h4>{this.props.post.title}</h4></Link>
                    <h5>{toReadable(this.props.post.published)}</h5>
                </div>
        			</div>
        		</div>
       	</div>
    	);
  }
}

export default BlogHeader;
