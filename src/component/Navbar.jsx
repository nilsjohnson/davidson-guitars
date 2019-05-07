import React, { Component } from 'react';
import '../css/app.scss';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="hi">Services</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/blog.">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
      );
  }
}

export default Navbar;
