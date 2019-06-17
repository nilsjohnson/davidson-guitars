import React, { Component } from 'react';
import '../../css/app.scss';
import { Link } from 'react-router-dom';
import {toReadable } from '../../util/util.js';


class BlogHeader extends Component {
 	getImage = () => {
    if(typeof this.props.post.images === "undefined") {
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
        	<div>
            <div className="row">
              <div className="mx-auto d-block">
                <img src={this.getImage()} className="img-fluid blog-thumb"/>
              </div>
            </div>
            <div className="well">
                <Link to={{
                   pathname: '/blog',
                   search: '?post=' + this.props.post.id
                }}><h4 className="text-center">{this.props.post.title}</h4></Link>
            </div>
            <hr/>
          </div>
    	);
  }
}

export default BlogHeader;

/*
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
                </div>
              </div>
            </div>
        </div>
*/
