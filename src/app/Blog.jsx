import React, { Component } from 'react';
import '../css/app.scss';
import BlogSelector from '../component/blog/BlogSelector.jsx';
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import PostContainer from '../component/blog/PostContainer.jsx';


class Blog extends Component {
  render() {
    let url = new URL(window.location.href);
    let query = url.searchParams.get("post");

    return (
      <div>
        <Header/>
        <Navbar
            activePage="blog"
          />
        <div className="trans well container">  
          {query ? <PostContainer postId={query}/> : <BlogSelector/>}
        </div> 
        <Footer/>
      </div>
    );
  }
}

export default Blog;