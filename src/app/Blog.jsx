import React, { Component } from 'react';
import '../css/app.scss';
import BlogSelector from '../component/blog/BlogSelector.jsx';
import Navbar from '../component/Navbar.jsx';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import PostContainer from '../component/blog/PostContainer.jsx';


class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    }
  }

  getView = () => {
    let url = new URL(window.location.href);
    let query = url.searchParams.get("post");
    // if there is a query, find it
    if(query) {
      /*return(
        <PostContainer
          postId={query}
        />                  
        );*/

        return (
        <div>
        <Header/>
        <Navbar/>
        <PostContainer
          postId={query}
        /> 
        <Footer/>
        </div>
      );
    }
    else {
      return (
        <div>
        <Header/>
        <Navbar/>
        <BlogSelector/>
        <Footer/>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.getView()}
      </div>
    );
  }
}

export default Blog;