import React, { Component } from 'react';
import axios from 'axios';
import '../css/app.scss';




class PostEditor extends Component {
  constructor(props) {
    super(props);

     this.state = {
      title: "",
      body: "",
      file: null
    };

  }

  setTitle = (event) => {
    this.setState({title: event.target.value.trim()});
  }

  setBody = (event) => {
    this.setState({body: event.target.value.trim()});
  }


  render() {
       return (  
      <div>
        <center><h1>New Post</h1></center>
        
        <hr></hr>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Title:</label>
          <div className="col-sm-10">
            <input onBlur={this.setTitle}type="text" className="form-control"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Body:</label>
          <div className="col-sm-8">
            <textarea type="text" className="form-control"/>
          </div>
        </div>

        <div className= "text-center mx-auto">
          <button className="btn btn-primary mr-1" onClick={this.handleCreate}>Create</button>
          <button className="btn btn-secondary" onClick={this.props.cancel}>Cancel</button>
        </div>
        
      </div>
    );
  }
}

export default PostEditor;