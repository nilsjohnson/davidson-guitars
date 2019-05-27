import React, { Component } from 'react';
import '../css/app.scss';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm trans justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
