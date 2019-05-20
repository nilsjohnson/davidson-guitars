import React, { Component } from 'react';
import '../../css/app.scss';
import { getLatest, getPostById } from '../../util/blog.js';
import BlogHeader from './BlogHeader.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';


class PostContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: null
		};

		let callback = this.setPost;

		getPostById(this.props.postId).then(function(response) {
			if(response.ok) {
				response.json().then(data => {
					//console.log(data);
					callback(data);
					
				});
			}
			else {
				console.log("problem fetching latest posts")
			}
		});
	}

	setPost = (post) => {
		this.setState({content: post.content});
	}

 	render() {
    	return (
      	<div>
      		<Header/>
      		<div className="trans container" 
      			dangerouslySetInnerHTML={{__html: this.state.content}}>
      		</div>
      		<Footer/>
     	</div>
    	);
  }
}

export default PostContainer;
