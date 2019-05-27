import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/strings.js';


class Footer extends Component {
  render() {
    return (
        <div className="trans footer">
          <span className="text-center">{getString("footer")}</span> 
        </div>
      );
  }
}

export default Footer;