import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../strings.js';

class Header extends Component {
  render() {
    return (
     <div className="header">
        <h1 className="text-center">{getString("name")}</h1>
        <h3 className="text-center"> {getString("addr_1") + getString("addr_2") + " | " + getString("phoneNum")}</h3>
      </div>
    );
  }
}

export default Header;
