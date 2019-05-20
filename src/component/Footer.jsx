import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../util/strings.js';


class Footer extends Component {
  render() {
    return (
        <footer>
          <p className="text-center">{getString("footer")}</p> 
        </footer>
      );
  }
}

export default Footer;