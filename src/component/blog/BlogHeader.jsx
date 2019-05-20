import React, { Component } from 'react';
import '../../css/app.scss';
import { Link } from 'react-router-dom'


class BlogHeader extends Component {
 	render() {
    	return (
      	<div className="">
      		<Link to={{
      			pathname: '/blog',
      			search: '?post=' + this.props.post.id
    		}}><h5 className="">{this.props.post.title}</h5></Link>

     	</div>
    	);
  }
}

export default BlogHeader;
