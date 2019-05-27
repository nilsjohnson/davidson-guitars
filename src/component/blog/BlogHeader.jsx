import React, { Component } from 'react';
import '../../css/app.scss';
import { Link } from 'react-router-dom';
import {toReadable } from '../../util/util.js';


class BlogHeader extends Component {
 	render() {
    	return (
      	<div className="container">
      		<div className="row">
      			<div className="col-4">
      				<h5>{toReadable(this.props.post.published)}</h5>
      			</div>
      			<div className="col-8">
	      			<Link to={{
	      				pathname: '/blog',
	      				search: '?post=' + this.props.post.id
	    			}}><h5 className="">{this.props.post.title}</h5></Link>
      			</div>
      		</div>
     	</div>
    	);
  }
}

export default BlogHeader;
