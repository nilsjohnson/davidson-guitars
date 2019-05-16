import React, { Component } from 'react';
import '../css/app.scss';
import {getString} from '../strings.js';
import frets from '../img/frets.jpg';
import owen from '../img/owen.jpg';


class ServicesBlerb extends Component {
  render() {
    return (
    	<div dangerouslySetInnerHTML={{__html: getString("services")}}className="trans container">
           
        </div>
    );
  }

}

export default ServicesBlerb;

