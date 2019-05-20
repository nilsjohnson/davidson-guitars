import React, { Component } from 'react';
import '../../css/app.scss';
import { getLatest } from '../../util/blog.js';
import BlogHeader from './BlogHeader.jsx';


class BlogSelector extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};

		let callback = this.setPosts;
		// fetches the latests blog posts
		getLatest().then(function(response) {
			if(response.ok) {
				response.json().then(data => {
					console.log(data.items);
					callback(data.items);
					
				});
			}
			else {
				console.log("problem fetching latest posts")
			}
		});
	}

	setPosts = (posts) => {
		this.setState({posts: posts});
		
	}
	
 	render() {
    	return (
      	<div>
      		<h3 className="text-center">Blog</h3>
      			{this.state.posts.map(item => <BlogHeader
      				key={item.title}
      				post={item}/>)}

     	</div>
    	);
  }
}

export default BlogSelector;

