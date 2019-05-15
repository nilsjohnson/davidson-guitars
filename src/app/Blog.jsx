import React, { Component } from 'react';
import '../css/app.scss';
import Navbar from '../component/Navbar.jsx';
import Landing from '../component/Landing.jsx';
import Reverb from '../component/Reverb.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import BlogWell from '../component/BlogWell.jsx';
import DAO from '../data/DAO.js';


class Blog extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		dao: new DAO(),
  		posts: []
  	};
  }

  setPosts = (posts) => {
  	this.setState({posts: posts});
  	console.log(posts);
  }

  componentDidMount() {
  	this.state.dao.getBlogPosts(this.setPosts);
  }	

  render() {
    return (
      <div>
        <Header/>
        <Navbar />
        <BlogWell/>
        <BlogWell/>
        <Footer/>
      </div>
    );
  }
}

export default Blog;