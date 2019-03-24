import React, { Component } from 'react';
import '../css/app.scss';


class Header extends Component {
  render() {
    return (
     <div className="header">
        <h1 className="text-center">Davidson Guitars</h1>
        <h3 className="text-center"> 62A Main St. Northfield, MA 01260 | (413) 498-4400</h3>
      </div>
    );
  }
}

export default Header;
