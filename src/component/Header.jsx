import React, { Component } from 'react';
import '../css/app.scss';
import {getResource} from '../util/data.js';

class Header extends Component {
  render() {
    return (
     <div className="header">
        <h1 className="text-center">{getResource("name")}</h1>
        {/*<h3 className="text-center"> {getResource("addr_1") + getResource("addr_2") + " | " + getResource("phoneNum")}</h3>*/}
      </div>
    );
  }
}

export default Header;
