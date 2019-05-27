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
    // if the is a query find it
    if(query) {
      return(
        <PostContainer
          postId={query}
        />                  
        );
    }
    else {
      return (
        <div>
        <Header/>
        <Navbar/>
        <div className="trans container"> <hr/>
          <BlogSelector/>
          <hr/>
        </div>
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