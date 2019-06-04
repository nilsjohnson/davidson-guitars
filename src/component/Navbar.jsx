import React, { Component } from 'react';
import '../css/app.scss';


class Navbar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm trans justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={this.props.activePage === "home" ? " active nav-link" : " nav-link" } href="/">Home</a>
          </li>
          <li className="nav-item">
             <a className={this.props.activePage === "blog" ? " active nav-link" : " nav-link" } href="/blog">The Shop</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
