import React, { Component } from 'react';
import '../css/app.scss';
import {getResource} from '../util/data.js';
import Martin from'../img/martin.png';
import Fender from'../img/fender.png';

class Brands extends Component {
  render() {
    return (
        <div>
          <div className="row">
            <div className="mx-auto d-block">
              <img className="img-fluid" id="logo" src={Martin}/>
              <img className="img-fluid" id="logo" src={Fender}/>
            </div>  
          </div>
          <br/>
          <h4 className="text-center">{getResource("warrantyHeader")}</h4> 
        </div>
      );
  }
}

export default Brands;


