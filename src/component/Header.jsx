import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../Strings.js';

class Header extends Component {
  render() {
    return (
     <div className="header">
        <h1 className="text-center">{getString("name")}</h1>
        <h3 className="text-center"> {getString("addr_1") + getString("addr_2") + " | " + getString("addr_2")}</h3>
      </div>
    );
  }
}

export default Header;
