import React, { Component } from 'react';
import '../css/app.scss';
import {getResource} from '../util/data.js';


class Footer extends Component {
  render() {
    return (
        <div className="trans footer">
          <span className="text-center">{getResource("footer")}</span> 
        </div>
      );
  }
}

export default Footer;